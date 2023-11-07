import { useContext } from "react"

import { DeviceContext } from "stores/global/DeviceStore"

import Style from "./style.module.scss"

// !definition of component
/**
 *
 * @description --> Home page of the website
 * @returns Home page
 */
// ! component

const Home = () => {
  const Device = useContext(DeviceContext)
  return (
    <>
      <section
        className={`bg-img-general d-flex flex-column justify-content-center align-items-center text-white fs-50px fw-900 ${Style.landing_page} ${
          Device.isMobile ? "flex-column" : ""
        }`}
      >
        Welcome To Bookstore!
      </section>
      <section className={`d-flex text-white bg-black`}>
        <div className="position-relative">
          <div className={`bg-img-general ${Style.featured_book}`} />
          <div className={`position-absolute top-0 right-0 bg-img-general d-flex justify-content-center align-items-center ${Style.tag}`}>
            <p className="mb-0 fw-700">Featured!</p>
          </div>
        </div>
        <div className={`d-flex flex-column px-5 pt-4 overflow-scroll`}>
          <h2 className="fs-30px mb-4">Featured Book: The Chronicles of Narnia</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
