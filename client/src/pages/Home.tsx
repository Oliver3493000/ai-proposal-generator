import { Button } from "@/components/ui/button";
import { APP_TITLE } from "@/const";
import { ArrowRight, Clock, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">{APP_TITLE}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/generator">
              <Button variant="default" className="gap-2">
                Try it Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-foreground block mb-2">Create Winning Upwork Proposals</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              in Seconds
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Stop spending hours writing proposals. Let AI craft personalized, professional proposals
            that win clients and boost your success rate on Upwork.
          </p>
          <Link href="/generator">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Start Generating <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">AI-Powered</h3>
              <p className="text-muted-foreground">
                Leverages advanced AI to understand job requirements and craft tailored proposals
                that resonate with clients.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Save 90% Time</h3>
              <p className="text-muted-foreground">
                What used to take 30 minutes now takes 30 seconds. Generate professional proposals
                instantly and apply to more jobs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Higher Success Rate</h3>
              <p className="text-muted-foreground">
                Well-crafted, personalized proposals increase your chances of landing interviews and
                winning projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Paste Job Description</h3>
              <p className="text-muted-foreground">
                Copy the Upwork job post URL or description into our generator.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                  2
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Generates Proposal</h3>
              <p className="text-muted-foreground">
                Our AI analyzes the job and creates a personalized proposal for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Copy & Submit</h3>
              <p className="text-muted-foreground">
                Review, edit if needed, and copy the proposal to submit on Upwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-primary to-purple-700 p-12 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-4xl font-bold">Ready to Win More Projects?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of freelancers who are already using AI to boost their Upwork success.
          </p>
          <Link href="/generator">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
              Get Started Now <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 {APP_TITLE}. Powered by AI.</p>
        </div>
      </footer>
    </div>
  );
}
