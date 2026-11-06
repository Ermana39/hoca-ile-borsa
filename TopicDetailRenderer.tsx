import StudyGuide from "../../components/StudyGuide";
import Link from "next/link";
import JsonLd from "../../JsonLd";
import TopicCompletionClient from "../../TopicCompletionClient";
import FormattedContent from "../../components/FormattedContent";
import VideoCards from "../../components/VideoCards";
import { getContentTypeLabel } from "../../../lib/content-types";
import type { PageVideo } from "../../../lib/learning-videos";
import type { CatalogItem } from "../../../lib/public-data";
import { getNodeHref, type ContentNode } from "../../../lib/content-navigation";
import { isPdfEligibleTest } from "../../../lib/pdf-seo";
import styles from "../../contentNavigation.module.css";

function difficultyLabel(value: string | null) {
  if (value === "easy") return "Kolay";
  if (value === "medium") return "Orta";
  if (value === "hard") return "Zor";
  return "Karma";
}

export default function TopicDetailRenderer({
  node,
  nodes,
  path,
  contents,
  tests,
  videos = [],
  breadcrumbJsonLd,
  hasMoreContents = false,
  hasMoreTests = false,
}: {
  node: ContentNode;
  nodes: ContentNode[];
  path: ContentNode[];
  contents: CatalogItem[];
  tests: CatalogItem[];
  videos?: PageVideo[];
  breadcrumbJsonLd: Record<string, unknown>;
  hasMoreContents?: boolean;
  hasMoreTests?: boolean;
}) {
  const resourcePlan = [...new Set(contents.map((content) => getContentTypeLabel(content.type)))];
  const testPlan = [...new Set(tests.map((test) => difficultyLabel(test.difficulty)))];
  const guideIntroduction = node.seo_description
    || contents.find((content) => content.description)?.description
    || node.description
    || `${node.name} konusunu yayımlanmış kaynak ve testlerle adım adım çalışabilirsiniz.`;

  return (
    <main className={styles.page} data-public-renderer="topic-detail">
      <JsonLd data={breadcrumbJsonLd} />
      <div className={styles.container}>
        <nav aria-label="İçerik yolu">
          <ol className={styles.breadcrumb}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>Ana Sayfa</Link>
            </li>
            {path.map((item, index) => (
              <li key={item.id} className={styles.breadcrumbItem}>
                {index === path.length - 1
                  ? <span aria-current="page">{item.name}</span>
                  : <Link href={getNodeHref(nodes, item)} className={styles.breadcrumbLink}>{item.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>

        <section className={styles.hero} aria-labelledby="topic-title">
          <p className={styles.eyebrow}>Konu</p>
          <h1 id="topic-title" className={styles.title}>{node.name}</h1>
          {node.description && <p className={styles.intro}>{node.description}</p>}
        </section>

        <TopicCompletionClient topicId={node.id} />

        {/* Konu videoları ilerleme bölümünün hemen altında; ders notları ve testlerden önce görünür. */}
        <VideoCards videos={videos} skipHref={tests.length > 0 ? "#topic-tests-title" : undefined} skipLabel="Testlere geç" />

        {node.page_content && (
          <section className={styles.section} aria-label="Ayrıntılı içerik">
            <article className={styles.pageContent}>
              <FormattedContent body={node.page_content} pageTitle={node.name} />
            </article>
          </section>
        )}

        {contents.length > 0 && (
          <section className={styles.section} aria-labelledby="topic-contents-title">
            <h2 id="topic-contents-title" className={styles.sectionTitle}>İlgili Ders Notları / Konu Anlatımları</h2>
            <div className={styles.testList}>
              {contents.map((content) => (
                <article key={content.id} className={styles.testCard}>
                  <div>
                    <p className={styles.testMeta}>{getContentTypeLabel(content.type)}</p>
                    <h3 className={styles.testTitle}>{content.title}</h3>
                    {content.description && <p className={styles.testDescription}>{content.description}</p>}
                  </div>
                  <Link href={content.href} className={styles.testLink}>Oku</Link>
                </article>
              ))}
            </div>
            {hasMoreContents && (
              <Link href={`/ders-notlari?topic=${encodeURIComponent(node.id)}`} className={styles.moreLink}>Tüm kaynakları gör →</Link>
            )}
          </section>
        )}

        {tests.length > 0 && (
          <section className={styles.section} aria-labelledby="topic-tests-title">
            <h2 id="topic-tests-title" className={styles.sectionTitle}>İlgili Testler</h2>
            <div className={styles.testList}>
              {tests.map((test) => (
                <article key={test.id} className={styles.testCard}>
                  <div>
                    <h3 className={styles.testTitle}>{test.title}</h3>
                    {test.description && <p className={styles.testDescription}>{test.description}</p>}
                    <p className={styles.testMeta}>{difficultyLabel(test.difficulty)} · {test.question_count} soru · Online çöz{isPdfEligibleTest(test.question_count) ? " · PDF (Premium)" : ""}</p>
                  </div>
                  <Link href={test.href} className={styles.testLink}>Testi çöz</Link>
                </article>
              ))}
            </div>
            {hasMoreTests && (
              <Link href={`/testler?topic=${encodeURIComponent(node.id)}`} className={styles.moreLink}>Tüm testleri gör →</Link>
            )}
          </section>
        )}
      <StudyGuide title={path.map(n => n.name).join(" · ")}>
          {guideIntroduction} {resourcePlan.length > 0
            ? `${resourcePlan.join(", ")} kaynaklarını bu sırayla inceleyip kendi özetinizi çıkarın.`
            : "Bu konu için yazılı kaynak yayımlandığında temel kavramlardan başlayın."} {tests.length > 0
            ? `${testPlan.join(", ")} düzeylerindeki ${tests.length} testte toplam ${tests.reduce((sum, test) => sum + test.question_count, 0)} soruyu çözerek eksiklerinizi belirleyin.`
            : "Test yayımlandığında öğrendiklerinizi soru çözümüyle kontrol edin."}
        </StudyGuide>
      </div>
    </main>
  );
}
