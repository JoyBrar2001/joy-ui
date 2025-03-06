import Alert from "@/components/ui/alerts/Alert";
import Button01 from "@/components/ui/buttons/Button01";
import Input01 from "@/components/ui/inputs/Input01_Simple";
import Input02 from "@/components/ui/inputs/Input02_Icons";
import { ArrowRight, Lock, Search } from "lucide-react";
import { FaGithub, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";

type ComponentEntry = {
  title: string;
  component: (props?: any) => React.ReactNode;
};

type ComponentCategory = {
  cols: 4 | 6 | 12;
  title: string;
  subtitle: string;
  components: ComponentEntry[];
};

export type ComponentData = Record<string, ComponentCategory>;

export const data: ComponentData = {
  alert: {
    cols: 6,
    title: "Alerts",
    subtitle: "A collection of Alerts for you to use",
    components: [
      {
        title: "Info",
        component: () => <Alert label="Completed Successfully!" variant="info" logoOnlyColored />
      },
      {
        title: "Info (Colored)",
        component: () => <Alert label="Completed Successfully!" variant="info" />
      },
      {
        title: "Success",
        component: () => <Alert label="Completed Successfully!" variant="success" logoOnlyColored />
      },
      {
        title: "Success (Colored)",
        component: () => <Alert label="Completed Successfully!" variant="success" />
      },
      {
        title: "Warning",
        component: () => <Alert label="Check your input!" variant="warning" logoOnlyColored />
      },
      {
        title: "Warning (Colored)",
        component: () => <Alert label="Check your input!" variant="warning" />
      },
      {
        title: "Alert",
        component: () => <Alert label="Something went wrong!" variant="alert" logoOnlyColored />
      },
      {
        title: "Alert (Colored)",
        component: () => <Alert label="Something went wrong!" variant="alert" />
      },
      {
        title: "Info with Button",
        component: () => <Alert label="Update Available!" variant="info" buttonText="Update Now" />
      },
      {
        title: "Success with Button",
        component: () => <Alert label="Download Complete!" variant="success" buttonText="Open File" />
      },
      {
        title: "Warning with Button & Link",
        component: () => (
          <Alert label="Storage Almost Full!" variant="warning" buttonText="Manage Storage" link="/components/ui/alert" />
        )
      },
      {
        title: "Alert with Button & Link",
        component: () => (
          <Alert label="Security Risk Detected!" variant="alert" buttonText="Resolve Issue" link="/components/ui/alert" />
        )
      }
    ],
  },
  input: {
    cols: 4,
    title: "Input",
    subtitle: "A collection of Inputs for you to use",
    components: [
      {
        title: "Simple Input",
        component: (props: any) => <Input01 {...props} label="Username" placeholder="Enter Username" />
      },
      {
        title: "Input with Description",
        component: (props: any) => <Input01 {...props} label="Username" description="Username must contain alphabets, at least one numeric value, and no special symbols." placeholder="Enter Username" />
      },
      {
        title: "Input with Left Icon",
        component: (props: any) => <Input02 {...props} label="Search" placeholder="Search for users..." leftIcon={<Search className="size-[18px]" />} />
      },
      {
        title: "Input with Right Icon",
        component: (props: any) => <Input02 {...props} label="Password" placeholder="Enter password" type="password" rightIcon={<Lock className="size-[18px]" />} />
      },
      {
        title: "Input with Both Icons",
        component: (props: any) => <Input02 {...props} label="Just for Fun" placeholder="I have 2 icons" leftIcon={<Search className="size-[18px]" />} rightIcon={<Lock className="size-[18px]" />} />
      },
      {
        title: "Disabled Input",
        component: (props: any) => <Input02 {...props} label="Username" placeholder="Enter Username" defaultValue="JoyBrar2001" description="Username can no longer be changed" disabled={true} />
      },
      {
        title: "Error Input",
        component: (props: any) => <Input02 label="Username" placeholder="Enter Username" defaultValue="JoyBrar" error="Invalid Entry - Username must contain one numeric" {...props} />
      },
    ],
  },
  button: {
    cols: 4,
    title: "Button",
    subtitle: "A collection of buttons to choose from.",
    components: [
      {
        title: "Primary Button",
        component: (props: any) => <Button01 {...props}>Primary</Button01>
      },
      {
        title: "Secondary Button",
        component: (props: any) => <Button01 {...props} variant="secondary">Secondary</Button01>
      },
      {
        title: "Outline Button",
        component: (props: any) => <Button01 {...props} variant="outline">Outline</Button01>
      },
      {
        title: "Ghost Button",
        component: (props: any) => <Button01 {...props} variant="ghost">Ghost</Button01>
      },
      {
        title: "Desctructive Button",
        component: (props: any) => <Button01 {...props} variant="destructive">Desctructive</Button01>
      },
      {
        title: "Primary Button with Left Icon",
        component: (props: any) => <Button01 {...props} variant="primary" leftIcon={<Search className="size-4" />}>Search</Button01>
      },
      {
        title: "Primary Button with Right Icon",
        component: (props: any) => <Button01 {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Next</Button01>
      },
      {
        title: "Primary Button with Both Icons",
        component: (props: any) => <Button01 {...props} variant="primary" leftIcon={<Search className="size-4" />} rightIcon={<ArrowRight className="size-4" />}>Search</Button01>
      },
      {
        title: "Disabled Primary Button",
        component: (props: any) => <Button01 {...props} variant="primary" disabled>Disabled</Button01>
      },
      {
        title: "Disabled Outline Button",
        component: (props: any) => <Button01 {...props} variant="outline" disabled>Disabled</Button01>
      },
      {
        title: "Full Width button",
        component: (props: any) => <Button01 className="w-full" {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Full width</Button01>
      },
      {
        title: "Spaced Between Button",
        component: (props: any) => <Button01 className="w-full justify-between" {...props} variant="primary" rightIcon={<ArrowRight className="size-4" />}>Full width</Button01>
      },
      {
        title: "Auth Icon Buttons",
        component: (props: any) => <div className="w-full flex justify-start gap-2">
          <Button01 {...props} variant="outline"><FaGoogle className="size-4" /></Button01>
          <Button01 {...props} variant="outline"><FaGithub className="size-4" /></Button01>
          <Button01 {...props} variant="outline"><FaTwitter className="size-4" /></Button01>
          <Button01 {...props} variant="outline"><FaMicrosoft className="size-4" /></Button01>
        </div>
      },
      {
        title: "Auth Buttons with Titles",
        component: (props: any) => <div className="flex flex-col justify-start gap-2 mx-auto">
          <Button01 {...props} className="px-12" variant="outline" leftIcon={<FaGoogle className="size-4" />}>
            Login with Google
          </Button01>
          <Button01 {...props} className="px-12" variant="outline" leftIcon={<FaGithub className="size-4" />}>
            Login with Github
          </Button01>
          <Button01 {...props} className="px-12" variant="outline" leftIcon={<FaTwitter className="size-4" />}>
            Login with Twitter
          </Button01>
          <Button01 {...props} className="px-12" variant="outline" leftIcon={<FaMicrosoft className="size-4" />}>
            Login with Microsoft
          </Button01>
        </div>
      },
      {
        title: "Colored Auth Buttons with Titles",
        component: (props: any) => <div className="flex flex-col justify-start gap-2 mx-auto">
          <Button01 {...props} variant="custom" className="bg-rose-500 hover:bg-rose-600 px-12" leftIcon={<FaGoogle className="size-4" />}>
            Login with Google
          </Button01>
          <Button01 {...props} variant="custom" className="bg-neutral-500 hover:bg-neutral-600 px-12" leftIcon={<FaGithub className="size-4" />}>
            Login with Github
          </Button01>
          <Button01 {...props} variant="custom" className="bg-sky-500 hover:bg-sky-600 px-12" leftIcon={<FaTwitter className="size-4" />}>
            Login with Twitter
          </Button01>
          <Button01 {...props} variant="custom" className="bg-amber-500 hover:bg-amber-600 px-12" leftIcon={<FaMicrosoft className="size-4" />}>
            Login with Microsoft
          </Button01>
        </div>
      },
    ],
  }
};
