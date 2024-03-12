"use client";
import ReduxProvider from "./_store/redux-provider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
