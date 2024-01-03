import { useEffect, useState } from "react";
import LayoutDemo from "../../layout/LayoutDemo";
import Body from "@/components/Home";

export default function Home() {
  const [powerOn, setPowerOn] = useState(false);

  return (
    <LayoutDemo>
      <Body />
    </LayoutDemo>
  );
}
