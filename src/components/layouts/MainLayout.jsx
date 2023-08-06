import Head from "next/head";

export const MainLayout = ({ pageTitle = '', pageDesc = '', children }) => {
  return (
    <>
      <Head>
        <title>Bustagrand | { pageTitle }</title>
        <link rel='icon' href={ process.env.NEXT_PUBLIC_LOGO } />
        <meta name='description' content={ pageDesc } />
      </Head>

      {/*WsppBtn.jsx*/} 

      <nav>
        {/*NavBar.jsx*/} 
      </nav>

      {/*SideMenu.jsx*/} 

      <main
        style={{
          margin: 'auto',
          marginTop: '35px',
          maxWidth: '1440px',
          padding: '0px'
        }}
      >
        { children }
      </main>

      {/*Footer.jsx*/} 
    </>
  );
}
