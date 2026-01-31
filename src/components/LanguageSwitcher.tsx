import { Box, Button, ButtonGroup } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const lng = event.currentTarget.dataset.lng;
      if (!lng) return;
      i18n.changeLanguage(lng);
      // localStorage.setItem("language", lng);
    },
    [i18n],
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <ButtonGroup
        variant="contained"
        sx={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Button
          data-lng="en"
          onClick={changeLanguage}
          sx={{
            bgcolor:
              i18n.language === "en" ? "#FFD700" : "rgba(255, 215, 0, 0.3)",
            color: i18n.language === "en" ? "#000" : "#FFD700",
            fontWeight: i18n.language === "en" ? 700 : 500,
            px: { xs: 2, sm: 3 },
            py: { xs: 0.75, sm: 1 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
            "&:hover": {
              bgcolor:
                i18n.language === "en" ? "#E5C100" : "rgba(255, 215, 0, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          EN
        </Button>
        <Button
          data-lng="vi"
          onClick={changeLanguage}
          sx={{
            bgcolor:
              i18n.language === "vi" ? "#FFD700" : "rgba(255, 215, 0, 0.3)",
            color: i18n.language === "vi" ? "#000" : "#FFD700",
            fontWeight: i18n.language === "vi" ? 700 : 500,
            px: { xs: 2, sm: 3 },
            py: { xs: 0.75, sm: 1 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
            "&:hover": {
              bgcolor:
                i18n.language === "vi" ? "#E5C100" : "rgba(255, 215, 0, 0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          VI
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
