import { Title } from "solid-start";
import { t } from "~/utils/i18n";

export default function Home() {


  return (
    <main>
      <Title>Hello World</Title>
      <h1>{t('index_title_hello')}</h1>
      <p style={{
        "font-size": '20px'
      }}>
        {t('index_subtitle_under_construction')}
      </p>
    </main>
  );
}
