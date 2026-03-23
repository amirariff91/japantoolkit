"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type GroupSize = "solo" | "pair" | "group";
type DeviceReadiness = "ready" | "mixed";
type UsageStyle = "light" | "heavy";

export function ConnectivityQuiz() {
  const [groupSize, setGroupSize] = useState<GroupSize>("solo");
  const [deviceReadiness, setDeviceReadiness] = useState<DeviceReadiness>("ready");
  const [usageStyle, setUsageStyle] = useState<UsageStyle>("light");

  const result = useMemo(() => {
    const esimScore =
      (groupSize === "solo" ? 2 : groupSize === "pair" ? 1 : 0) +
      (deviceReadiness === "ready" ? 2 : 0) +
      (usageStyle === "light" ? 1 : 0);
    const wifiScore =
      (groupSize === "group" ? 2 : groupSize === "pair" ? 1 : 0) +
      (deviceReadiness === "mixed" ? 2 : 0) +
      (usageStyle === "heavy" ? 2 : 0);

    if (wifiScore > esimScore) {
      return {
        label: "Pocket Wi-Fi",
        summary:
          "Your answers point to a shared hotspot: more users, mixed device support, or heavier all-day usage makes pocket Wi-Fi easier to manage.",
      };
    }

    return {
      label: "eSIM",
      summary:
        "Your answers favor the simpler option. If the phone is unlocked and compatible, eSIM keeps arrival day smooth and removes the need to rent, charge, and return extra gear.",
    };
  }, [deviceReadiness, groupSize, usageStyle]);

  return (
    <Card className="border-stone-200 bg-stone-900 text-stone-50">
      <CardHeader>
        <CardTitle>Recommendation quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <fieldset className="space-y-3">
          <Label className="text-stone-100">How many people need connectivity?</Label>
          <RadioGroup value={groupSize} onValueChange={(value) => setGroupSize(value as GroupSize)}>
            <QuizOption id="solo" value="solo" label="Just me" />
            <QuizOption id="pair" value="pair" label="Two travelers" />
            <QuizOption id="group" value="group" label="Three or more" />
          </RadioGroup>
        </fieldset>

        <fieldset className="space-y-3">
          <Label className="text-stone-100">Are all devices eSIM-ready?</Label>
          <RadioGroup value={deviceReadiness} onValueChange={(value) => setDeviceReadiness(value as DeviceReadiness)}>
            <QuizOption id="ready" value="ready" label="Yes, all set" />
            <QuizOption id="mixed" value="mixed" label="No, mixed devices" />
          </RadioGroup>
        </fieldset>

        <fieldset className="space-y-3">
          <Label className="text-stone-100">What kind of usage are you planning?</Label>
          <RadioGroup value={usageStyle} onValueChange={(value) => setUsageStyle(value as UsageStyle)}>
            <QuizOption id="light" value="light" label="Maps, messaging, moderate browsing" />
            <QuizOption id="heavy" value="heavy" label="Heavy uploads, laptop work, constant sharing" />
          </RadioGroup>
        </fieldset>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <Badge className="bg-amber-500 text-stone-950 hover:bg-amber-500">{result.label}</Badge>
          <p className="mt-3 text-sm leading-6 text-stone-200">{result.summary}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function QuizOption({
  id,
  label,
  value,
}: {
  id: string;
  label: string;
  value: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-stone-200"
    >
      <RadioGroupItem id={id} value={value} className="border-stone-300 text-amber-400" />
      <span>{label}</span>
    </label>
  );
}
