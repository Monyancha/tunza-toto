"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";
import CountryMap from "./components/country-map";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "./components/users-stat";
import ReportsArea from "./components/reports-area";
import DashboardSelect from "@/components/dasboard-select";
import TopTen from "./components/top-ten";
import TopPage from "./components/top-page";
import DatePickerWithRange from "@/components/date-picker-with-range";
import { Button } from "@mantine/core";
import MantineModal from "./modal"
import WelcomeBlock from "../project/components/welcome-block";
import ReportsCard from "../project/components/reports";

const DashboardPageView = ({ trans }) => {
  return (
    <div className="space-y-6">
       <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
          <WelcomeBlock />
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
            <ReportsCard />
          </div>
        </div>
      </div>


      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
        <Card>
            <CardHeader className="border-none pb-0">
              <CardTitle className="pt-2.5">Registered Pregnancies</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <TopPage />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Card>
            <CardHeader className="border-none pb-0">
              <CardTitle className="pt-2.5">Mother Appointments</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <TopPage />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
        <Card>
            <CardHeader className="border-none pb-0">
              <CardTitle className="pt-2.5">Children</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <TopPage />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Card>
            <CardHeader className="border-none pb-0">
              <CardTitle className="pt-2.5">Children Appointments</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <TopPage />
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default DashboardPageView;
