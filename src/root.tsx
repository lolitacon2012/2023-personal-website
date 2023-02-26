// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  ServerContext,
  Title,
} from "solid-start";
import { useRequest } from "solid-start/server";
import "./root.css";
import { getHtmlLang } from "./utils/xtGlobal";
import Header from "./components/Header"

export default function Root() {
  const pageEvent = useRequest();
  return (
    <Html lang={getHtmlLang()}>
      <Head>
        <Title>Xorazm Tabgach</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <ServerContext.Provider value={pageEvent}>
            <Header />
              <Routes>
                <FileRoutes />
              </Routes>
            </ServerContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
