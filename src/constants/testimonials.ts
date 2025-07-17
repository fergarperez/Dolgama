export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "Agricultora",
    content:
      "EcoGrow ha transformado mi cultivo. Los resultados son increíbles y completamente sostenibles.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Mendoza",
    role: "Ingeniero Agrónomo",
    content:
      "La calidad de los productos EcoGrow es excepcional. Recomiendo sus bioestimulantes al 100%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Rodríguez",
    role: "Productora Orgánica",
    content:
      "Desde que uso EcoGrow, mis cultivos son más resistentes y productivos. Excelente servicio técnico.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];
export default testimonials;
