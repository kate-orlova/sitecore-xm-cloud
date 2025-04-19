import { useRouter } from 'next/router';

const LanguageSelector = ({ sitecoreContext }) => {
  const router = useRouter();
  const { locales, locale, pathname, asPath, query } = router;
  const currentLanguage = sitecoreContext?.language || locale;

  const handleLanguageChange = (newLocale) => {
    if (newLocale !== currentLanguage) {
      router.push({ pathname, query }, asPath, { locale: newLocale });
    }
  };

  return (
    <div className="component-content_lng">
     language:  <select
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="border rounded p-2"
      >
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;