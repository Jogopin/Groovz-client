export default function TermsAndConditionsPage() {
    const sections = [
        {
            title: 'Introduction',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget justo nunc. Aenean luctus mauris vel ornare scelerisque. Praesent tempus sed elit sit amet aliquam.'
        },
        {
            title: 'User Agreements',
            content: 'Nulla facilisi. Sed eu libero vel nunc commodo congue at nec dui. Fusce a turpis eros, sed vehicula justo. Sed aliquam orci at eros bibendum, non cursus purus tempor.'
        },
        {
            title: 'Privacy & Data',
            content: 'Curabitur at semper erat. Sed eu augue at arcu efficitur tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            title: 'Limitations & Liabilities',
            content: 'Vivamus facilisis, mauris nec blandit malesuada, purus ex faucibus elit, in vehicula ex nulla et orci. Maecenas vel lacinia nulla, sit amet congue ipsum.'
        }
    ];

    return (
        <section className="m-4 mx-auto md:w-3/4 gap-5 rounded-lg bg-white p-6 text-zinc-800 shadow-md pb-16">
            <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions</h1>

            <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">
            Welcome to [Your Store Name]. The following terms and conditions guide the use of and commerce in our online store. By using our store, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our online store.
            </p>

            {sections.map((section, index) => (
                <div className="m-4" key={index}>
                    <h2 className="text-2xl font-semibold mb-4 text-center">{section.title}</h2>
                    <p className="text-zinc-700 mb-6 mx-auto w-full sm:w-4/6 lg:w-1/2">{section.content}</p>
                </div>
            ))}

        </section>
    );
}
