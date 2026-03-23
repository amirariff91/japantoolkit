import type { Metadata } from "next";

import { ConnectivityQuiz } from "@/components/connectivity-quiz";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: "eSIM vs Pocket Wi-Fi for Japan",
  description:
    "Compare eSIM and pocket Wi-Fi for Japan travel, including setup, battery impact, sharing, and which option fits solo trips, families, and remote work.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to choose between eSIM and pocket Wi-Fi in Japan",
  description:
    "Compare device compatibility, number of users, and usage style to decide whether eSIM or pocket Wi-Fi is a better fit.",
  step: [
    {
      "@type": "HowToStep",
      name: "Check your phone",
      text: "Confirm that your device is unlocked and supports eSIM before you buy a digital plan.",
    },
    {
      "@type": "HowToStep",
      name: "Count your users and devices",
      text: "Pocket Wi-Fi works well when several people or multiple devices need one connection.",
    },
    {
      "@type": "HowToStep",
      name: "Match the option to your trip style",
      text: "Choose eSIM for convenience and low friction, or pick pocket Wi-Fi for group sharing and laptop-heavy use.",
    },
  ],
};

export default function EsimVsPocketWifiPage() {
  return (
    <div className="space-y-10 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="space-y-4">
        <Badge className="bg-amber-700 text-white hover:bg-amber-700">Tool</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">eSIM vs pocket Wi-Fi in Japan</h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700">
          Both options work well in Japan, but they solve different problems. eSIM is usually the cleanest setup for a
          solo traveler, while pocket Wi-Fi can be the better value when a family or group wants one shared hotspot.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Quick comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>eSIM</TableHead>
                  <TableHead>Pocket Wi-Fi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Setup time</TableCell>
                  <TableCell>Fast if your phone is unlocked and eSIM-ready.</TableCell>
                  <TableCell>Requires pickup, charging, and return logistics.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Best for</TableCell>
                  <TableCell>Solo trips, couples, light packers, city-first itineraries.</TableCell>
                  <TableCell>Families, friend groups, laptop users, multi-device travel.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Battery impact</TableCell>
                  <TableCell>Uses your phone only, with no extra device to carry.</TableCell>
                  <TableCell>Separate battery to manage, but can reduce phone tethering drain.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sharing</TableCell>
                  <TableCell>Poor fit unless every traveler buys their own plan.</TableCell>
                  <TableCell>Strong fit when several people need one connection.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Risk</TableCell>
                  <TableCell>Fails if your handset is locked or incompatible.</TableCell>
                  <TableCell>Rental gear can be lost, forgotten, or run out of charge.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <ConnectivityQuiz />
      </div>

      <section className="grid gap-5 md:grid-cols-3">
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Choose eSIM when</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            You want to land, clear immigration, and head straight to the train without hunting for a counter or
            carrying one more thing in your day bag.
          </CardContent>
        </Card>
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Choose pocket Wi-Fi when</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            Your trip has several people sharing maps, translation, messaging, and laptop use all day, especially if
            not every device supports eSIM.
          </CardContent>
        </Card>
        <Card className="border-stone-200 bg-white/85">
          <CardHeader>
            <CardTitle>Practical backup</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-stone-600">
            Save hotel addresses offline and keep station screenshots on your phone so you still have key trip details
            even if setup takes longer than planned.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
