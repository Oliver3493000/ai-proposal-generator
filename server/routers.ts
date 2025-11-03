import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { invokeLLM } from "./_core/llm";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  proposal: router({
    // Changed from protectedProcedure to publicProcedure - no auth required
    generate: publicProcedure
      .input(
        z.object({
          jobDescription: z.string().min(10).max(5000),
          userSkills: z.string().max(1000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { jobDescription, userSkills } = input;

        // Build the prompt for AI
        const systemPrompt = `You are an expert Upwork proposal writer. Generate a professional, personalized proposal that:
1. Opens with genuine interest in the specific project
2. Highlights relevant experience and skills
3. Explains how you'll solve the client's problem
4. Includes a clear call-to-action for further discussion

Keep the proposal between 300-500 words. Be professional, confident, and specific.`;

        const userPrompt = `Job Description:
${jobDescription}

${userSkills ? `My Skills and Experience:\n${userSkills}\n` : ''}

Generate a winning Upwork proposal for this job.`;

        // Call OpenAI API
        const response = await invokeLLM({
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        });

        const content = response.choices[0]?.message?.content;
        const generatedProposal = typeof content === 'string' ? content : "";

        if (!generatedProposal) {
          throw new Error("Failed to generate proposal");
        }

        // No longer saving to database since we removed auth
        // Users can copy and save locally

        return {
          proposal: generatedProposal,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
