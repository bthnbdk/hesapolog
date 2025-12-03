export default function HomePage() {
    return (
        <main className="min-h-screen bg-brand-light">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-brand-dark mb-4">
                        Hesapolog
                    </h1>
                    <p className="text-lg text-brand-grey mb-8">
                        Tüm hesaplama araçları için kapsamlı web uygulaması
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Kredi Hesaplamaları</h2>
                            <p className="text-brand-grey">Kredi hesaplama araçları yakında eklenecek.</p>
                        </div>

                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Vergi Hesaplamaları</h2>
                            <p className="text-brand-grey">Vergi hesaplama araçları yakında eklenecek.</p>
                        </div>

                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Matematiksel Hesaplamalar</h2>
                            <p className="text-brand-grey">Matematik hesaplama araçları yakında eklenecek.</p>
                        </div>

                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Sağlık Hesaplamaları</h2>
                            <p className="text-brand-grey">Sağlık hesaplama araçları yakında eklenecek.</p>
                        </div>

                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Yatırım Hesaplamaları</h2>
                            <p className="text-brand-grey">Yatırım hesaplama araçları yakında eklenecek.</p>
                        </div>

                        <div className="bg-brand-surface p-6 rounded-lg shadow-soft">
                            <h2 className="text-xl font-semibold mb-3">Diğer Hesaplamalar</h2>
                            <p className="text-brand-grey">Diğer hesaplama araçları yakında eklenecek.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
