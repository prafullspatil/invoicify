import { TitleBar } from "@shopify/app-bridge-react";
import { Button, Icon, Page } from "@shopify/polaris";
import { PlayIcon, SettingsIcon } from "@shopify/polaris-icons";
import { STATIC_INTEGRATIONS } from "app/core/constant/app-constant";
import { useTranslation } from "react-i18next";

const Integrations = () => {
  const { t } = useTranslation();
  const integrationsJson = STATIC_INTEGRATIONS;

  const translatedIntegrations = [
    {
      key: "collect_customer_tax_no",
      link: integrationsJson[0].buttonLink,
    },
    {
      key: "my_account_download",
      link: integrationsJson[1].buttonLink,
    },
    {
      key: "thank_you_page_download",
      link: integrationsJson[2].buttonLink,
    },
  ];

  return (
    <>
      <Page>
        <TitleBar title={t("integrations.title")} />
        <Page fullWidth>
          <div className="row gap-2">
            {translatedIntegrations.map((integration) => {
              return (
                <div className="col p-4 bg-white rounded-top" key={integration.key}>
                  <h4 className="fs-5 my-2 fw-semibold">{t(`integrations.${integration.key}.title`)}</h4>
                  <div className="my-4 d-flex bg-light rounded justify-content-center align-items-center py-5">
                    <Icon source={PlayIcon} />
                  </div>
                  <p className="fs-10 my-4 text-muted">
                    {t(`integrations.${integration.key}.description`)}
                  </p>
                  <Button
                    onClick={() => {
                      window.open(integration.link, "_blank");
                    }}
                    fullWidth
                    size="large"
                    variant="secondary"
                    icon={SettingsIcon}
                  >
                    {t(`integrations.${integration.key}.button_label`)}
                  </Button>
                </div>
              );
            })}
          </div>
        </Page>
      </Page>
    </>
  );
};

export default Integrations;
