import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import ContactCard from "./ContactCard";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ContactCard />
      <ScrollRestoration />
    </>
  );
}
