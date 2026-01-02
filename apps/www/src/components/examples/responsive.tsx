import { Drawer } from "vaul-base"

import { Button } from "@/components/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const ResponsiveDrawer = () => {
  const isMobile = useIsMobile()
  return (
    <Drawer.Root direction={isMobile ? "bottom" : "center"}>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className={cn("bg-background text-foreground fixed inset-x-0 bottom-0 h-auto w-full max-w-xl rounded-lg border", isMobile && "max-w-full rounded-b-none")}>
         {isMobile && <Drawer.Handle className="top-4" />}
          <div className="flex flex-col space-y-4 p-6">
            <h4 className="font-semibold">Welcome to the Drawer</h4>
            <p>
              This drawer adapts its direction based on your screen size.
            </p>
            <p>
              We just change the direction prop dynamically using a custom hook. The transition between directions is 
              handeled smoothly by the drawer component.
            </p>


            <pre className="rounded bg-muted p-4 text-sm overflow-x-auto">
              <code>{`<Drawer.Root direction={isMobile ? "bottom" : "center"}>
  ...
</Drawer.Root>`}
              </code>
            </pre>
            
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default ResponsiveDrawer
