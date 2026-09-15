import { Progress } from "@/components/ui/Progress";

export function ProgressAt25() { return <Progress value={25} aria-label="25 percent complete" />; }
export function ProgressAt65() { return <Progress value={65} aria-label="65 percent complete" />; }
export function ProgressComplete() { return <Progress value={100} aria-label="Complete" />; }
export function ProgressCustomHeight() { return <Progress value={45} className="h-2" aria-label="45 percent complete" />; }
