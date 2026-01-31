import { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const BlessingFeature = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const incenseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (incenseRef.current) {
      gsap.to(incenseRef.current, {
        y: -10,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!message.trim()) {
      setError(t("blessing.validationError"));
      return;
    }

    setIsSubmitting(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setShowSuccess(true);
    setName("");
    setMessage("");

    if (incenseRef.current) {
      gsap.fromTo(
        incenseRef.current,
        { scale: 1 },
        { scale: 1.5, duration: 0.3, yoyo: true, repeat: 1 },
      );
    }
  }, [message, t]);

  return (
    <Box className="blessing-feature" sx={{ my: 6, px: 2 }}>
      <Card
        sx={{
          maxWidth: "800px",
          mx: "auto",
          p: { xs: 2, sm: 3, md: 4 },
          background:
            "linear-gradient(135deg, rgba(212, 23, 10, 0.15) 0%, rgba(255, 215, 0, 0.1) 100%)",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255, 215, 0, 0.3)",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            ref={incenseRef}
            sx={{
              fontSize: { xs: "60px", sm: "70px", md: "80px" },
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))",
              mb: 2,
            }}
          >
            🕯️
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#FFD700",
              fontWeight: 700,
              mb: 1,
              px: 2,
            }}
          >
            {t("blessing.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              opacity: 0.8,
              mt: 2,
              px: 2,
            }}
          >
            {t("blessing.subtitle")}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label={t("blessing.nameLabel")}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("blessing.namePlaceholder")}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                color: "#FFFFFF",
                "& fieldset": {
                  borderColor: "rgba(255, 215, 0, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 215, 0, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD700",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
              },
            }}
          />

          <TextField
            fullWidth
            label={t("blessing.messageLabel")}
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("blessing.messagePlaceholder")}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#FFFFFF",
                "& fieldset": {
                  borderColor: "rgba(255, 215, 0, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 215, 0, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD700",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
              },
            }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={isSubmitting}
          sx={{
            py: { xs: 1.25, sm: 1.5 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: 600,
            background: "linear-gradient(135deg, #D4170A 0%, #FFD700 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #8B0000 0%, #C7A600 100%)",
            },
          }}
        >
          {isSubmitting
            ? t("blessing.submittingButton")
            : t("blessing.submitButton")}
        </Button>
      </Card>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {t("blessing.successMessage")}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BlessingFeature;
