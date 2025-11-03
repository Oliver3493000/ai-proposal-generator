import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { APP_TITLE } from "@/const";
import { trpc } from "@/lib/trpc";
import { Check, Copy, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const EXAMPLE_JOBS = [
  {
    title: "Full-Stack Developer for SaaS MVP",
    description: `We are looking for an experienced full-stack developer to build the MVP of our SaaS product. The project requires React for the frontend, Node.js for the backend, and PostgreSQL for the database. You should be able to deliver a working prototype in 4 weeks.`,
  },
  {
    title: "AI Integration Specialist",
    description: `Need someone to integrate OpenAI API into our existing web application. The goal is to add a chatbot feature that can answer customer questions based on our knowledge base.`,
  },
  {
    title: "Mobile App Developer - React Native",
    description: `Looking for a skilled React Native developer to build a cross-platform mobile app for our e-commerce business. Must have experience with payment integration and push notifications.`,
  },
];

export default function Generator() {
  const [jobDescription, setJobDescription] = useState("");
  const [userSkills, setUserSkills] = useState("");
  const [generatedProposal, setGeneratedProposal] = useState("");
  const [copied, setCopied] = useState(false);

  const generateMutation = trpc.proposal.generate.useMutation({
    onSuccess: (data) => {
      setGeneratedProposal(data.proposal);
      toast.success("Proposal generated successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to generate proposal");
    },
  });

  const handleGenerate = () => {
    if (!jobDescription.trim()) {
      toast.error("Please enter a job description");
      return;
    }
    generateMutation.mutate({ jobDescription, userSkills });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedProposal);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const loadExample = (example: typeof EXAMPLE_JOBS[0]) => {
    setJobDescription(example.description);
    setGeneratedProposal("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">{APP_TITLE}</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-4xl font-bold">Generate Your Proposal</h1>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="job-description" className="text-base font-semibold">
                      Job Description *
                    </Label>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Paste the Upwork job post URL or description here
                    </p>
                    <Textarea
                      id="job-description"
                      placeholder="Paste the Upwork job post URL or description here..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="min-h-[200px] resize-none"
                      maxLength={5000}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      {jobDescription.length}/5000 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="user-skills" className="text-base font-semibold">
                      Your Skills & Experience (Optional)
                    </Label>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Help AI personalize your proposal
                    </p>
                    <Textarea
                      id="user-skills"
                      placeholder="e.g., Full-Stack Developer with 5 years of experience in React and Node.js..."
                      value={userSkills}
                      onChange={(e) => setUserSkills(e.target.value)}
                      className="min-h-[120px] resize-none"
                      maxLength={1000}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">
                      {userSkills.length}/1000 characters
                    </p>
                  </div>

                  <Button
                    onClick={handleGenerate}
                    disabled={generateMutation.isPending || !jobDescription.trim()}
                    className="w-full gap-2"
                    size="lg"
                  >
                    {generateMutation.isPending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" />
                        Generate Proposal
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Example Jobs */}
              <Card className="border-primary/20 bg-gradient-to-br from-purple-50/50 to-orange-50/50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Try an Example</h3>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Click any example below to auto-fill the job description
                </p>
                <div className="space-y-2">
                  {EXAMPLE_JOBS.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-2 text-left hover:border-primary hover:bg-primary/5"
                      onClick={() => loadExample(example)}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="truncate text-sm">{example.title}</span>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Output Section */}
            <div>
              <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Label className="text-base font-semibold">Generated Proposal</Label>
                  {generatedProposal && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleRegenerate}
                        disabled={generateMutation.isPending}
                        className="gap-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        <span className="hidden sm:inline">Regenerate</span>
                      </Button>
                      <Button 
                        variant={copied ? "default" : "outline"} 
                        size="sm" 
                        onClick={handleCopy}
                        className="gap-2"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy All</span>
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </div>

                {generateMutation.isPending ? (
                  <div className="flex min-h-[500px] items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-gradient-to-br from-purple-50/30 to-orange-50/30">
                    <div className="text-center">
                      <div className="relative mx-auto mb-6 h-16 w-16">
                        <Sparkles className="absolute inset-0 h-16 w-16 animate-pulse text-primary" />
                        <Loader2 className="absolute inset-0 h-16 w-16 animate-spin text-primary/60" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-primary">AI is Writing...</h3>
                      <p className="text-sm text-muted-foreground">
                        Analyzing job requirements and generating professional proposal
                      </p>
                      <div className="mt-4 flex items-center justify-center gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0ms' }}></span>
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '150ms' }}></span>
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                ) : generatedProposal ? (
                  <div className="space-y-4">
                    <div className="rounded-lg border bg-gradient-to-br from-purple-50 to-orange-50 p-6">
                      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span>AI-Generated Proposal</span>
                      </div>
                      <Textarea
                        value={generatedProposal}
                        onChange={(e) => setGeneratedProposal(e.target.value)}
                        className="min-h-[400px] resize-none border-0 bg-white/80 font-sans text-base leading-relaxed shadow-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3 w-3" />
                      <span>Feel free to edit the proposal above before copying</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-[500px] items-center justify-center rounded-lg border-2 border-dashed">
                    <div className="text-center">
                      <Sparkles className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Your generated proposal will appear here
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
