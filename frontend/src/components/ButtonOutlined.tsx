import { Button, ConfigProvider } from "antd";

export default function ButtonOutlined({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: "#B48F58",
            colorPrimary: "#000",
            colorPrimaryActive: "#B48F58",
            primaryColor: "#fff",
            colorBgContainer: "#B48F58",
          },
        },
      }}
    >
      <Button
        type="default"
        className="relative group h-11 w-full text-sm bg-[#F2EEEC] text-colorBlack outline-1 border-colorBlack border font-secondary tracking-wide rounded-none rounded-tr-[7px] rounded-bl-[7px] hover:scale-[1.02] hover:tracking-widest hover:border-[1.5px] hover:font-medium"
      >
        {children}
      </Button>
    </ConfigProvider>
  );
}
