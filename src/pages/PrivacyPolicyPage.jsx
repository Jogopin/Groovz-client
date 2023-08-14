export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: 'Introduction',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, quam eget volutpat tempor, metus odio facilisis diam, a fermentum dolor mi a purus.'
        },
        {
            title: 'Personal Data We Collect',
            content: 'Aenean vulputate, augue eget dictum auctor, justo ligula posuere ligula, at ultrices tellus ipsum in dui. Nullam tempus, ex in congue bibendum, orci nulla dictum tortor, a hendrerit velit libero eget ante.'
        },
        {
            title: 'Use of Your Data',
            content: 'Suspendisse posuere turpis at efficitur tincidunt. Nunc sagittis cursus lacus id feugiat.'
        },
        {
            title: 'Data Protection',
            content: 'Maecenas non nunc nisl. Donec in finibus nisl, non consequat purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
        }
    ];

    return (
        <section className="m-4 mx-auto md:w-3/4 gap-5 rounded-lg bg-white p-6 text-zinc-800 shadow-md pb-16">
            <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

            <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus tortor, dignissim id tortor sit amet, scelerisque ornare nisl. Curabitur at orci quam.
            </p>

            {sections.map((section, index) => (
                <div key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-center">{section.title}</h2>
                    <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">{section.content}</p>
                </div>
            ))}
        </section>
    );
}
