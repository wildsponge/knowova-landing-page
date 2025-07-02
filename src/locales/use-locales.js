import dayjs from 'dayjs';
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { toast } from 'src/components/snackbar';
import { useSettingsContext } from 'src/components/settings';

import { fallbackLng, getCurrentLang } from './locales-config';

// ----------------------------------------------------------------------

export function useTranslate(namespace) {
  const settings = useSettingsContext();

  const { t, i18n } = useTranslation(namespace);
  const { t: tMessages } = useTranslation('messages');

  const currentLang = getCurrentLang(i18n.resolvedLanguage);

  const updateDirection = useCallback(
    (lang) => {
      settings.setState({ direction: i18n.dir(lang) });
    },
    [i18n, settings]
  );

  const updateDayjsLocale = useCallback((lang) => {
    const updatedLang = getCurrentLang(lang);
    dayjs.locale(updatedLang.adapterLocale);
  }, []);

  const handleChangeLang = useCallback(
    async (lang) => {
      try {
        const changeLangPromise = i18n.changeLanguage(lang);

        toast.promise(changeLangPromise, {
          loading: tMessages('languageSwitch.loading'),
          success: () => tMessages('languageSwitch.success'),
          error: () => tMessages('languageSwitch.error'),
        });

        await changeLangPromise;

        updateDirection(lang);
        updateDayjsLocale(lang);
      } catch (error) {
        console.error(error);
      }
    },
    [i18n, tMessages, updateDayjsLocale, updateDirection]
  );

  const handleResetLang = useCallback(() => {
    handleChangeLang(fallbackLng);
  }, [handleChangeLang]);

  return {
    t,
    i18n,
    currentLang,
    onChangeLang: handleChangeLang,
    onResetLang: handleResetLang,
  };
}

// ----------------------------------------------------------------------

export function useLocaleDirectionSync() {
  const { i18n, currentLang } = useTranslate();
  const { state, setState } = useSettingsContext();

  const handleSync = useCallback(async () => {
    if (state.direction !== i18n.dir(currentLang.value)) {
      setState({ direction: i18n.dir(currentLang.value) });
    }

    if (i18n.resolvedLanguage !== currentLang.value) {
      await i18n.changeLanguage(currentLang.value);
    }
  }, [currentLang.value, i18n, setState, state.direction]);

  useEffect(() => {
    handleSync();
  }, [handleSync]);

  return null;
}
