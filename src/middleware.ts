import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isGuardedRoutes= createRouteMatcher(['/about', '/contact', '/services']);

export default clerkMiddleware(async (auth,req)=>{
 
    // Check if the request URL matches any of the guarded routes
    if (isGuardedRoutes(req)) {

      await auth.protect(); // Protect the route using Clerk's auth middleware
      // If the user is authenticated, continue with the request

    } else {
      // If it doesn't match, just continue with the request
      return NextResponse.next();
    }
})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};