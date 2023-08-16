// Components
import { SlideShow } from '@/components/ui/home';
// Layouts
import { MainLayout } from '@/components/layouts';

export default function Home() {
  return (
    <MainLayout
      pageTitle='Inicio'
      pageDesc='Estructuras metalicas y maderas'
    >
      { /*SlideShow*/ }
      <SlideShow />
      { /*Algunos servicios*/ }
    </MainLayout>
  )
}
