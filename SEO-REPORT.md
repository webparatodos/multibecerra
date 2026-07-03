# Informe SEO — Multi Becerra

## Checklist de lo implementado

### Arquitectura de contenido
- [x] Página `/pintura` — contenido único (~450 palabras)
- [x] Página `/mantenimiento-jardines` — contenido único (~480 palabras)
- [x] Página `/limpieza-exteriores` — contenido único (~420 palabras)
- [x] Sin páginas de zona independientes (`/ronda`, `/costa-del-sol`): el volumen de búsqueda de este negocio no justifica separarlas todavía — hacerlo ahora generaría contenido fino/duplicado. La cobertura por zona se resuelve dentro de cada página de servicio (bloque "Zona de trabajo" con las localidades listadas como texto indexable) y en la home.
- [x] URLs limpias, en minúsculas, con guiones: `/pintura`, `/mantenimiento-jardines`, `/limpieza-exteriores`
- [x] Enlazado interno: home → páginas de servicio (botón "Ver más" en cada tarjeta), cada página de servicio → las otras 2 + home, header/footer con navegación consistente

### On-page SEO
- [x] Title único por página (~55-60 caracteres), formato `[Servicio] en Ronda | ...`
- [x] Meta description única por página (~150-160 caracteres) con CTA implícito ("presupuesto sin compromiso")
- [x] Un único H1 por página con la keyword principal (verificado con test automatizado)
- [x] Jerarquía H2 coherente: "Qué incluye", "Cómo trabajamos", "Precio orientativo", "Zona de trabajo", "Preguntas frecuentes"
- [x] Contenido real orientado a resolver dudas: proceso de trabajo, precio orientativo, frecuencia (en jardines), materiales
- [x] Imágenes con `alt` descriptivo (ej. "Pintor aplicando pintura en una pared en Ronda")
- [ ] **Pendiente**: nombres de archivo de imagen con keywords — actualmente se usan placeholders de Unsplash con URLs genéricas; al sustituir por fotos reales, nómbralas tipo `mantenimiento-jardin-ronda.jpg`

### SEO técnico
- [x] `generateMetadata`/`export const metadata` dinámico en cada página (title, description)
- [x] Open Graph y Twitter Cards completos por página (título, descripción, imagen 1200×630)
- [x] Canonical tag en cada página (`alternates.canonical`)
- [x] `sitemap.ts` ampliado con las 4 URLs (home + 3 servicios)
- [x] `robots.ts` ya configurado (allow all + referencia al sitemap)
- [x] `lang="es"` declarado en `<html>`
- [x] Core Web Vitals: `next/image` con `sizes` definidos y `priority` solo en la imagen hero de cada página (evita layout shift y prioriza LCP); resto de imágenes con lazy loading nativo

### Datos estructurados (schema.org)
- [x] `HomeAndConstructionBusiness` en el layout global, ampliado con `hasOfferCatalog` (los 3 servicios × zonas), `openingHoursSpecification`, `priceRange`, `sameAs` (Facebook + Instagram)
- [x] `FAQPage` en cada página de servicio (4 preguntas reales y específicas por servicio)
- [x] `BreadcrumbList` en las 3 páginas de servicio, con migas de pan visibles e indexables
- [ ] `Review`/`AggregateRating`: **no implementado a propósito** — los testimonios actuales de la home son de ejemplo; marcarlos como schema sin ser reseñas reales incumple las directrices de datos estructurados de Google y puede penalizar el sitio. Implementar solo cuando haya reseñas verificadas (ver recomendaciones).

### SEO local
- [x] NAP consistente: teléfono (617 61 95 12), zona y redes centralizados en `src/lib/site-config.ts` (fuente única, sin datos duplicados/desincronizados)
- [x] Bloque "Zona de trabajo" en cada página de servicio con listado de localidades como texto (Ronda, Arriate, Montejaque, Benaoján, Cortes de la Frontera, Marbella, Estepona, San Pedro de Alcántara, Costa del Sol)
- [x] Mapa embebido en la home (`CoverageArea`)
- [ ] Enlace "Cómo llegar" / reseñas de Google: preparado para añadir en cuanto exista la ficha de Google Business Profile (ver siguientes pasos)

### Rendimiento y rastreo
- [x] `sitemap.xml` nativo de Next.js (sin necesidad de `next-sitemap`)
- [x] Accesibilidad verificada con axe-core: 0 violaciones WCAG AA en las 3 páginas nuevas
- [x] Las 6 rutas devuelven 200 (verificado)
- [ ] Google Search Console: sin verificar todavía — hueco preparado, solo falta añadir la propiedad y el meta tag/DNS de verificación cuando tengas acceso a Search Console
- [ ] GA4/GTM: no se ha añadido ningún ID (a propósito, según alcance pedido) — la integración es trivial de añadir en `layout.tsx` cuando tengas los IDs

## Keywords por página

| Página | Keyword principal | Keywords secundarias |
|---|---|---|
| `/pintura` | pintores en Ronda | pintor económico Ronda, pintura de fachadas Ronda, pintura interior de viviendas Ronda, empresa de pintura Serranía de Ronda, pintores Costa del Sol |
| `/mantenimiento-jardines` | mantenimiento de jardines Ronda | jardinero Ronda, poda y corte de césped Ronda, jardinero Serranía de Ronda, empresa de jardinería Costa del Sol, mantenimiento de jardines para comunidades |
| `/limpieza-exteriores` | limpieza de exteriores a presión Ronda | limpieza de patios y pisos Ronda, limpieza a presión Costa del Sol, limpieza de exteriores comunidades de vecinos |
| `/` (home) | Multi Becerra | resumen de las 3 keywords principales + marca |

## Siguientes pasos recomendados (fuera del código)

1. **Crear y verificar Google Business Profile** como "Multi Becerra", categoría principal "Jardinero" o "Servicio de pintura", con las 3 categorías de servicio, zona de cobertura (Ronda + radio de servicio), teléfono y horario idénticos a la web. Es el paso con más impacto en búsquedas locales tipo "jardinero cerca de mí".
2. **Conseguir las primeras reseñas reales** (Google + Facebook) de clientes ya atendidos. En cuanto haya 5-10 reseñas reales, pide que se implemente el marcado `AggregateRating` en la web — ahora mismo se ha evitado a propósito por ser testimonios de ejemplo.
3. **Backlinks locales**: alta en directorios de Ronda y la Serranía (Ayuntamiento de Ronda, asociación de comercio/empresarios de Ronda si existe, Páginas Amarillas, Guía Local Málaga, directorios de la Costa del Sol). Cada enlace desde un dominio local relevante ayuda más que muchos enlaces genéricos.
4. **Fotos reales de trabajos**: sustituir los placeholders de Unsplash por fotografías propias de trabajos terminados, nombrando los archivos con keywords (`pintura-fachada-ronda.jpg`, `poda-jardin-serrania-ronda.jpg`, etc.) y añadiéndolas también a Google Business Profile.
5. **Verificar Google Search Console** y enviar el sitemap (`https://www.multibecerra.com/sitemap.xml`) en cuanto el dominio esté desplegado en producción, para acelerar la indexación.
6. **Contenido adicional a futuro** (solo si hay tráfico que lo justifique): considerar páginas de zona específicas (`/ronda`, `/marbella`) o un blog con casos prácticos ("cuánto cuesta pintar una fachada en Ronda", "cuándo podar un seto en la Serranía") para captar más long-tail.
7. **Actualizar `siteConfig.url`** a `https://www.multibecerra.com` (ya está puesto) y confirmar que coincide exactamente con el dominio final en Cloudflare antes de verificar Search Console, para que canonical/OG/sitemap sean consistentes.
