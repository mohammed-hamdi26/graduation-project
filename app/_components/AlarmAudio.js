import { forwardRef } from "react";

const AlarmAudio = forwardRef(function AlarmAudio(props, ref) {
  return <audio ref={ref} src={"../../public/mixkit-data-scaner-2847.mp3"} />;
});

export default AlarmAudio;
