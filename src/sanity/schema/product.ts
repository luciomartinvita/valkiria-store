export default {
  name: 'product',
  title: 'Producto (Vestido)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Vestido',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Importados', value: 'importados' },
          { title: 'Quince Años', value: 'quince-anos' },
          { title: 'Egresos', value: 'egresos' },
          { title: 'Alta Costura', value: 'alta-costura' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'colors',
      title: 'Colores Disponibles',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizes',
      title: 'Talles Disponibles',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Generado automáticamente según la lógica de Valkiria',
    },
  ],
}
