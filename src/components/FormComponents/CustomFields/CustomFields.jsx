import { Select, ThemeProvider } from "@material-tailwind/react";

export function CustomSelect(props) {
  const { children } = props;
  const customTheme = {
    select: {
      styles: {
        base: {
          container: {
            minWidth: "min-w-[20px]",
          },
          select: {
            color: "text-blue-gray-900",
            borderColor: "border-red-500",
            fontFamily: "font-inter",
            disabled: "disabled:border-blue-gray-200 disabled:bg-blue-gray-50 disabled:bg-opacity-80" ,
          },
          label: {
            fontWeight: "font-normal",
            fontFamily: "font-inter",
            fontSize: "text-md",
          },
          menu: {
            p: "p-1",
            border: "border border-blue-gray-50",
            fontFamily: "font-inter",
            color: "text-blue-gray-900",
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <ThemeProvider value={customTheme}>
        <Select {...props}>{children}</Select>
      </ThemeProvider>
    </div>
  );
}
