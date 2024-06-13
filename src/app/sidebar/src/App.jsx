import {
  ThermometerSun,
  SunMedium,
  CalendarClock,
  CloudFog,
  Umbrella,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import image from "./assets/02d.png";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem
            icon={<SunMedium size={20} />}
            expandedContent={
              <div className="w-50">
                <img src={image} className="w-full h-auto" alt="Sun Image" />
              </div>
            }
          />
          <SidebarItem
            icon={<ThermometerSun size={20} />}
            expandedContent={<span className="text-7xl font-medium">12°C</span>}
          />
          <SidebarItem
            icon={<CalendarClock size={20} />}
            expandedContent={
              <span className="text-md font-medium">Monday, 16:00</span>
            }
          />
          <hr className="my-3" />
          <SidebarItem
            icon={<CloudFog size={20} />}
            expandedContent={
              <span className="text-md font-bold">☁️ Mostly cloudy</span>
            }
          />
          <SidebarItem
            icon={<Umbrella size={20} />}
            expandedContent={
              <span className="text-md font-bold">⛈️ Rain -30%</span>
            }
          />
        </Sidebar>
      </div>
    </>
  );
}

export default App;
