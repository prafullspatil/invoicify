import { TitleBar } from "@shopify/app-bridge-react";
import {
  FormLayout,
  Layout,
  LegacyCard,
  Page,
  Select,
  Text,
  TextContainer,
} from "@shopify/polaris";
import { LANGUAGES } from "app/core/constant/app-constant";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const Accounts = () => {
  const { t, i18n } = useTranslation("en");

  const handleLanguageChange = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n],
  );

  return (
    <>
      <TitleBar title={t("integrations.title")} />
      <Page>
        <Layout>
          <Layout.Section variant="oneThird">
            <div style={{ marginTop: "var(--p-space-500)" }}>
              <TextContainer>
                <Text id="storeDetails" variant="headingMd" as="h2">
                  {t("account.app_language")}
                </Text>
                <Text tone="subdued" as="p">
                  {t("account.description")}
                </Text>
              </TextContainer>
            </div>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard sectioned>
              <div className="p-2">
                <FormLayout>
                  <span className="fs-6 fw-semibold">
                    {t("account.app_language")}
                  </span>
                  <Select
                    labelInline
                    label=""
                    options={LANGUAGES}
                    onChange={handleLanguageChange}
                    value={i18n.language}
                  />
                </FormLayout>
              </div>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default Accounts;
