const example = (body: string) => `import { OneTimePasswordField, OneTimePasswordHiddenInput, OneTimePasswordInput } from "@/components/ui/OneTimePasswordField";\n\nexport function OtpExample() { return (${body}); }`;
const field = (length: number, extra = "") => `<OneTimePasswordField ${extra} className="flex gap-2">{Array.from({ length: ${length} }, (_, index) => <OneTimePasswordInput key={index} index={index} />)}<OneTimePasswordHiddenInput /></OneTimePasswordField>`;
export const basicOtpCode = example(field(6));
export const sixDigitOtpCode = example(field(6, `defaultValue="123"`));
export const alphaNumericOtpCode = example(field(6, `type="text" validationType="alphanumeric"`));
export const segmentedOtpCode = example(field(4, `type="password"`));
export const autoSubmitOtpCode = example(field(6, `autoSubmit onAutoSubmit={(value) => console.log(value)}`));
export const disabledOtpCode = example(field(6, `disabled defaultValue="123456"`));
