import { SyncLoader } from "react-spinners";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
function Spinner({ color = "#fff", size = 60 }) {
  return (
    <Flex align="center" justify="center" gap="middle">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: size, color: color }} spin />
        }
      />
    </Flex>
  );
}

export default Spinner;
