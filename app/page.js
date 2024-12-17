import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Bill's Citrus Clean
          </h1>
          <p className="mt-2 text-gray-600">Professional cleaning solutions</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-w-16 aspect-h-9">
              {/* <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-64 rounded-t-lg"
                  /> */}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                    Product Name
                  </h2>
              <p className="mt-2 text-gray-600">Desc</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                      $
                    </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  View Details
                </span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
