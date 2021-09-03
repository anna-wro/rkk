import Layout from 'components/layout/Layout';
import copy from 'consts/copy';

export default function OfflinePage() {
  return (
    <Layout>
      <div className="mt-12">
        <h3 className="text-xl font-bold center">{copy.offlineHeader}</h3>
        <p className="mt-4 text-gray-900">{copy.offlineDesc}</p>
        <div className="my-8 flex items-center justify-center">
          <button
            className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green hover:bg-green-600 focus:outline-none transition-colors dark:bg-green-600 dark:hover:bg-green-700 dark:text-white/90"
            onClick={() => location.reload()}
          >
            {copy.reloadPage}
          </button>
        </div>
      </div>
    </Layout>
  );
}
