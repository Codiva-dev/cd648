import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="bg-white min-h-[70vh] flex items-center justify-center px-4">
        <section className="max-w-lg mx-auto text-center py-16">
          <p className="text-[#9c968b] font-semibold tracking-[0.2em] text-sm mb-4">
            {t('notFound.code')}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
            {t('notFound.message')}
          </p>
          <Link
            to="/"
            className="inline-block bg-[#1c1c1c] text-white text-sm px-6 py-3 hover:bg-[#333] transition-colors"
          >
            {t('notFound.home')}
          </Link>
        </section>
      </div>
    </Layout>
  );
}
