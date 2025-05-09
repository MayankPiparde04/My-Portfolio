export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container flex flex-col items-center justify-center gap-6 md:gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            &copy; {new Date().getFullYear()} Mayank Piparde. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Full-stack developer passionate about creating innovative, user-friendly web applications.
          </p>
        </div>
      </div>
    </footer>
  )
}
