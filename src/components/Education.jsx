import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();
  const schools = t('education.schools', { returnObjects: true });

  return (
    <section className="my-8">
      <h2 className="text-2xl md:text-4xl text-center mb-6">
        {t('education.title')}
      </h2>
      <div className="space-y-6">
        {schools.map((item, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{item.institution}</h3>
            <p className="italic">{item.degree}</p>
            <p className="text-neutral-600">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
