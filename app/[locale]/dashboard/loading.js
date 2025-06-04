import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import logo from "@/public/a-flat-vector-lettermark-logo-design-sho_M1U1HI8tTvOIgjZLmcU6eg_gSbp1v7WSyql-yuko9RTsQ-removebg-preview.png";
import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col items-center justify-center  ">
      <Image
        src={logo}
        alt="logo"
        className="mx-auto w-40 h-40 mb-2 animate-pulse-logo "
      />
      <Flex align="center" justify="center" gap="middle">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 60, color: "#432c81" }} spin />
          }
        />
      </Flex>
    </div>
  );
}
