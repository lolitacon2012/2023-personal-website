import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import { t } from "~/utils/i18n";

export default function NotFound() {
  return (
    <main>
      <Title>{t('404_not_found_title')}</Title>
      <HttpStatusCode code={404} />
      <h1>{t('404_not_found_title')}</h1>
    </main>
  );
}
