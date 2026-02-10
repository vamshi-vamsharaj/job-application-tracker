import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import ImageTabs from "@/components/image-tabs";
import { Briefcase } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
export default function Home() {
  return (
    <div className="flex min-h-screen items-col  bg-white">

      <main className="flex-1">
        {/*hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black text-6xl mb-6 font-bold">
              A better way to track your job applications.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organise and manage your job search in one place.
            </p>
            <div className="text-black gap-4 flex flex-col items-center">
              <Link href="/sign-up">
                <Button size="lg" className="text-0.8lg h-10 px-6 font-medium ">
                  Start for free<ArrowRight className="ml-1 mt-1" />
                </Button>
              </Link>

              <p className="text-muted-foreground  text-sm">
                Free Forever. No CreditCard required.
              </p>
            </div>
          </div>
        </section>

        <ImageTabs />
        {/* Features Section */}
        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-muted-foreground">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-muted-foreground">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-muted-foreground">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
