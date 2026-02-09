import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import ImageTabs from "@/components/image-tabs";
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


      </main>
    </div>
  );
}
