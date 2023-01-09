import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import logo from "../src/Assets/logo1.jpg";

function App() {
  return (
    <div>
      <main className="bg-white-600  px-10 ">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons  ">Developed by</h1>
            <ul className="flex items-center bg-">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-whte px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">
              Funanani Mazuwo
            </h2>
            <h3 className="text-2xl py-2"> Frontend developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Enthusiastic, highly-motivated Web development freelancer, with
              proven leadership capabilities, who likes to take initiative and
              seek out new challenges.
            </p>
          </div>
          <div className="text-5xl flex  justify-center gap-16 py-3 text-gray-600">
            <a>
              <AiFillTwitterCircle />
            </a>
            <a>
              <AiFillFacebook />
            </a>
            <a>
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <img src={logo} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10  ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACACAMAAACGL/NPAAAAzFBMVEX////RJCgAAAAHCQj//f78///6+vrPJSrMAAD37exTU1P///3LMzn//P/TIyrSJCa8vLxhYmH29PXn6OfTXV6BgYHz29rTaGflr63X19fRICDnuLXadHd4eHjFPT7SGBrt0tSnp6fPAAvmyczUhInHRkskJiWYmJjDAADckJQwMDDIyMgVFRXMMTNtbW3ejY5DQ0PtxMPgnZnOc3TdhIfTUFrEABPy5NzopKjFCyXaoaDXTk/sw7fTYmnPOkPbmJvpkYrcNTzbREXFUFBL7lw7AAAM1ElEQVR4nO2bD1fivBKHW2ialpZGCxYISGpdpQpdLCDrXa74qt//O92ZpIWKqMDu8u49p7N71vJvfTL9ZTIzCZpWWmmllVZaaaWVVlpppZVWWmmllfbXGzEMTTMMQojmgGn4EJ4lGsF//m4DXALEWt2AKy3nVZeG9pfTo6+RkRDHMBw7SNuT2bT32Jp+69oaqf/beF+ZaQdh2n2Y9e6XcyuOLUugRVE8f7L/Cs8TkDIYyqEgZOdH+jDuNRcu5VEUCcEZ05lOdTAKf7ho2aT+7/PDTCQrah9c3Z1MX/9jgUWIzPQt5lFdXNnkL9A9hBP8YQbpz1lr8czA0ZwDs+dt41bwSD9xjOPDGzJiqLCHD8Hb/316XM7nqGfEptQDgx8fwjPmUa4HmvHpL/rthkEaQgf+VnCbHaZPvaYbrRXiAbLHUNgfKCajh9FZk2PDGxC0cQDg7vbsPoHpKPgnkJ8ZXx4XHUM2zMqw/U+TxlbEQSQfC/sLY1QEx4U3iBOM+x7MSSZ1gSLR9Y/F/anN20cEB7Vr9iyODtXJpuv5+HjwmJBc9sXvIUcTPfN49HXSjTnbRSOMCfG1mETTPhq7QVLKpcYLkFviIdPjOGn2kq/YKb86HrzmUL4RW3Ap2kRijP6ApNG/51/Bs+SI4WYSbWoGlqLN2QvDcXE5sK++gvcYPx68vSxyMsYFBMxkuTkexlzM5HeBj8OjgBvEIO1IpoOMcyEgZXSbvZt2Gtq9t5DU4y4myQC/qSj2Nt3xmJUeBR7ruZaQYYQm/dZNOwxsXwW6DXhGef8DeMoEo0X+o8ETMwbV8PFl4ONDrV6vY4Jm7A4PeTAUJrHQ85TCs7pHgtdCC9FSuVhhSQ0mK6je2xD0ied5vJhNJo/zfJ1j1oN2lHqEQKxR8OBw4mBTow51HMKLbZ7X7AU42BOR0jmDKDSfquBizzLXe9HNEcgl/FRIeCCGug99q0pQp7VVNhhtuBUvHudz9DOlzOo6eMuw2r2x1HsBXnVF/qw5mtFkGXwdEoU6FlLpw/Q1iTYi4ko2i4jewJS25eAYp12YJ4Ys1on2wnN47SjwIAMlG8MOu7b0bRK/rUQg8guxgn/RU4lm95FUjB1wu7xXcOe681+HN3y/0Tnp7PTeYIkMtNl0KY8vFTyjsORCRQfLLIUgvrxq3cwiBV+3+yH2+8DZEwyxCYzXIVA2+viUveTwAT36hgXCgfAntdtKpdLY6b1hwpR3IRezVvDgUiue9+9xGF0TpWR5Ep7YKZEKc7QQRh2NNZgswZUVz/C2mC1BvQx+d1zDNP3OxVA98GsVtN0+eSlvNDga/q7gIXI/dmG9ChOdQ5YFrN0MHtcABwRiOHUTnByFWA18s+C2yH7rTMBa7e0Jf3KHuHfqQaNSqVYrZ7t9MhVULTTwo+D5SK4zAdwWgIfKfAXvaMF4DCmvU9dczlwbAqt2LyhP5HwZr+F37yB0JG9VPRjCdbUy3O2T3Shfi1gO74KQrDZeArzMb50VPBQubmRNZH+nyXnTxxi55B6nEv5GyDi/HzwoZQ18hgO53U3yWjuiH8GbBsBz+gYeXhWJaPl42eK85WNsdQE+MQ6Gl8DVykBe3yH898/ryEbn4myAb3mwtsFTgPcNM1huwhsQIT1+bxsSXmTwgkVUwj8dBH8i4SVx47qyGseGmRBCh6YcK1gNrsg40jfhE+l5Yvp+sHhmm55fMo+/KnghevhTu188Tp9kQgTwKlTuldv4IyS+a6zGsS3Kd85PYWJ3tExZAG9o/8wL8GEO7wG8D/D9l3eyAc9DhU2U53uyDR7Y6GZDyYYdsEidrpAHhbmrgas7DT97gMPagCczsQWe6lZXwi92gIf/DnuFMr15ig6CV/6+AGmcS8kr9IEM+Xcn+Xtur6sbnp+uGjYF+AQ1j7JZJl/DO9mmGo5iBU/2glfBvQYXcr5K3A5GfxxTNgNOKtejDXgHM1+QCfauPQlv2C51E5ywvhmoRcr43POYhjqGaQfp04Jnuc0+8xWcrHSDIR9pUfwy+CvDwRhmBg913hlcAbzhOz3IRihNpEl4314myQtrm7BqB/DKMqj7jta2qHfl+CrabMA7YXfyz6MrYstSWSUUI2S/NvcgE/0Fwp/6eeyvqn/Ay745zOB9ePNoNKqBMMwWpOQI7sJfAfA+JL3wEODhxZA+J/3ANB2zbSXJqwPD3jJhtSvcnoLkyPOUBOG27dmiH45UUlDLA+WFUsyt/DEamr70/KjSgV93NrodXUv4Hk2o6z6/JO6z6yG8D7JJXkSbGCgbN3kBeNNsx89JE5QEq8B7eBccznA3MFFrBhTge24vmLdqolZzycvB1IYNdUsuTN/I4OG1s9HoelQDdvB8oruA68IYaAafuK4FuSTAu8uEBgThhZu8wrols94t8Iy1xu3LYMZZ4kGo2ntvRE7COxkOr02cwXjRyUcx8NHzoxy+egual/BJoicufYYBIDzcHzuhyXPUxdsSuDCmcA1vykWqCG/m6UEfN1YgMWOQE8f7tz6GkvY0CzoqqNcwQMjYebaWjYS/vs40n6DbAV56Hp9B+IR3IcmW8AnAN0g7fvkPet7fDk+5izETUmIsX+b7t/vkIivnp1SNvBGnCC/Hc67gqzn8aFRFeAfhwesU4T0F77LEncOdR82DBYAMmk/olYLXc/jHfJFSiRkk+QgPCqIH9CrP88goA+X3t/CQ9oDmK9mLECrR8xrIBlYkyOVB+YzOQykMkDAVXQz5AczAJDBh/YRQya/gVQyVVDwqz0NuU8cMbCmwFwhliTHF3hk/pEt8kcFX7iBQmqfv4LNVuKGtFynNfFTFCLYY9TjMskpKcc5BPo8VVkAMjPOeuCosUpryfNMnUGdNLWa1oDwx7HsJvzigP9+5VfQyUG7Cn38A3xK4vOIqm62wm/BJQLQNeN6ys2JkYZO6Q0I6vwoI1FYh7iJSftDOSK2yWk53hTcKjbFt8FhJYZ6iZGNkoXIq95uXXOdQ4DpQgYe2AYMAyWP9jbXK/jZQq6ksonaDLyZmdC0bXVfwIe6HBIaSTQbfj3jUJQgPcUXMsDqXCTE4PohlggdPHmCNLBXQ9oCfbYOna3jMKp01PCFpP57JM042xciCU1edbSH2q0ptxNMh8Nooz4t3hi/k89vhgcQoyMbAlg32Y4nRxU/y1x/5YYugn5XD4rD2/Pm6iNpR89p4VYBT3XonG2YtTHnwagUPVQcYtsHlsGEaX8pfbf90RbajyA7bDBzsC0+Mmw/gZevDbk1tTR4aW0/YtonNvjqEmLzV1p9NZvdUZJ1ZClHpILvYG157WPVt3sPjTIUyA12/hk+++VhdB32e1V+MR1a0PvtErclhfcqT/eHbcQE+WLU+oid1xMxw2gFKWk1YGIrtRq+TMB276/1+XKCpt6omeXAY/M6eP19pvmvR9/BUiClkidi7TiHLItib8pibPsxafQiFVhyLYvu+uF9OIVmr/274M60Ar+pcCZ8Wok0OD0kigyUe2S9d94cddH82cYdKYMGkf2aYTlxiOvF74QcFePN7pZrDX1L2Dh5CJY1mkLbYT/OIJTGeH0L/fno4Ds3TmewcHML+Hv77Fvih6g1m8IHLi/BgvssY+Fk0x7OrOWgZ9IxbDHga4dPzZfL/iF7tQ0+YFeBXKXFWSZ3k8FXs5IxW8JCfr5TL0x9p+6aVTQIuvtDIO8noetw6/MBHEV7OyVs/K6lkvjPMc+bT00zzjlY4xcH4SxLF0eYRkJ3hKbOmh6RkW+CVRk6Hg9Gqg5blzDCSvNHqZFuZaB6qmkqIA/Ah2vP7ENbfg3cBi/D+SiN5gzLLmSujIWjqtnaOORDBDt2aQB6O2wVdnaKTjTaQG7eseXN8CQnPL+xgFuFV67W6Lk802UOrVO7g9UbDz85HkNDa381yYcJMRu5y6m5zktoomF86DPoGvnGbS7wyyHcaOoPByRvfEELoFxFkq98RO4rnSXP2lAa/5wDrG3itcy13BSujiw8/gIdYx9HXtG/A8WBOFLmv43ZgqwlKZK/4t8LD4++12veP0eX+hRG4bKvMKc2exmkgVyd5CEp/afbGP8MsJGLeQzR1vvGX4dEKmyJmo/H1Gccba9txw3xKMiaFHVmQ0bjTSRr+sP/MsYKLu9PzwcnePniNtsBT/B4C6oMny0VzdvMztfMvMZA/8p0cf8f9yzcG1eg0FquFn0lRg6OtmC5b3x66aWAraRM8Lo2HOw5LvP6IIUk6XerzCPzMKXWXr83pTRuYTWN9E+VXo1T5qv097NIggbzsttvdbnoZBn9I03/QiipWXz3711D2NjyihczyO3PZBt//j2HXiMgFXun8yF/7KK200korrbTSSiuttNJKK6200korrbTSSittF/sfUhhH9pX7Ad0AAAAASUVORK5CYII="
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Youtube Clone</h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className="py-4 text-teal-600">Developed With:</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAe1BMVEX////0tAD0sQDWngD+9ur/4Wj++Ob++ur75bj+++369Or0tQzUmgD+3GD52WDYoAz989r1tiH87Mr3ynD3zXv88dT/4F/62qDzrQDprAD//fn2v0n1uy7/6Zf1uDD1ujf/54375LH3x2f64ab51oz52pX2xVn+2lb54JG2hsa+AAADm0lEQVRoge3aa3uaMBgG4BK7YMa2AkrFwnAg2P3/X7i8sSoBcgbaXVeeT62Ctwk5Ik9PPj4+Pj4+XzRvz3PmTZc9FGjOFActFZcomDeoxBrs3CqT1XC5ABsEpfLaLlFcWmDFNX4rFmGDoJC36udliksL/Oxd73p36qOQycGzuJRMiqZpikQXn8NFQXPOMA7DEOPs3ARa5zi7KGkzQijJEhKStYnGWa4u2scMDalIQvYXiffq09xcFG1BDQlO667t6hRf/91GqhOdXFRlBJh0l3wsYpJdCjLJKsWZTm4UM+OSPw5D+YV9lzhazs0zYLucPwjlHcBZvpSLavj83fgQtIPvU0vPtXdRQ1ky2XTRHt5qZCfbuxGtZSJYf6EDoTUtucT2LpQpzIRvw5eSdGOH8qahpCrhIoSp+GR7twilbRbaeihejVq7qCWYtJKKlL9v725pNZ+EbBCcaEVv53ehNUv3TgjLWrS1W8W03ciGpJy2u7ia3S1ocWqpW9MKETas/9LdSt3tIm4ZK6Yc6MCxcPdsP26kGu1ZPGC59d+LhL0s039hWiBnyXhFZyTJxGBfzye6dCSS8RmWluLxzGEehIruhPNRJ61mF/cCqxzBzS1Uwkrnssj8CwUOU4FLW7usuE7ruhKLVm9sxYdlt76c1pNs9VaPtgYoqoUrvjncAJ3h89PhYFik8LKkj7m6dAxmWwN+tqswtCnp2O28L8uhxLjK+/d5K7jsZznrvA9ls07KRzVTzeFCZ4Kdfj9Y3oXmc0dZqbwxn9XKWyT9FKu5/LRzWq2eKzToRyuVd7/rZ79aeQmfz+xHq7ifVd5230+7mjvRnldpVxP9d53xKuoNV1F/vIpEmcXN+Dzq+fhTkPe/Ula3Hw2mwVt5jy+/vk3m9bec1XGvN5253hteVznHjcB9/aNgNdYbdQwVyyXLYtiRHzcCV81q3G/P8xzFHBsj+hpjp10NVu93jWTgJuzabgSu8toauNwwyVzGTrlarKbbHfrpkhs74eqxmr9bDR6UuLNjV5O1/H3wxo5cXdbOvbNDV5u1ch/swNXpQPZuj+VdA9bC7bOca8Kauxzbd41YY5dne65+k7JxB+zDNWQN3SF7d01ZM3fE3lxj1sgdsx+uOWvyPNIEe3UtWIPnr6ZY5pp1oHs0nzebZMG1ZDWfr5tmqWvL6j1PKGA3L+821/YW5fOTxx+iKJbniqieF/0ujBPr4+Pj4+Ozdv4BnztkamfuUm0AAAAASUVORK5CYII="
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Google keep clone
              </h3>
              {/* <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p> */}
              <h4 className="py-4 text-teal-600">Developed With:</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAXVBMVEX///8dofIAnfIAm/EAmfEVn/IAl/Hg8P202/rx+f75/f/T6fzD4vuf0fiFxffq9f5MsPQppPJru/XZ7fxXtPWNyfen1fnL5vt3wPY+qvQAlPFkuPWZzvg9rPN2vPZv+CZ4AAAC8UlEQVRoge2Z6ZKqMBCFoTut7CHsDuD7P+YFRmcchQQatOpW5fupJIeT7nQWHMdisVgsFovFYrFYLP8/Z69s0yKLI/+DooGXEgIRAYJqwse/ZPQ+2egC5P4AkMn7P34MLN0sWPFQgg+qk7Jbj78Heakw5cjWX+2Kd0P3BfT8ukwRXFFzdDPChCM7WB7iPeo3HFlnaCoMLWMxJ3uDLmvi9EIojK+cz7q9m1ajrNw81N7UKRaaly5II1sMol5Bcrn5PCV8t7+cl54INXap9RIFgOFS40USuPXgegtPNKAZZndMLVxqqqH86RWb2fLnX3SyI6LaLuvEv6OIaq7u5JrofjfrGLJO9Bg9zF6jHOmyeQA4bodhPP3pBJtnZc+gy10TnsIHmP1NzkqbVm7OlHXi537ppLoH05XeL1s3mOkXxKWrb9ltiC9b9zGjH6UB+qaKQllrZd3FcmOmX5gpNGiDq/S6mwvkL2fXNEUXIcXdaoXDghDyhRXX7PUSSydPuX5ZW5yRBBD7a8bUhStXd5qexB1nXm0eCU/m3jW6rC3dBD+nRvjTN9HXXz09a083IXWbRQPA28LuNsw7oNwIFDfCpHZUySGluYYp2yM7LHXM+Sv2nj9rl2WZvSj8IIvTdstQ7pUdLRenrZ5xV1aNTLPfLzfaNR5fjeTUp70y7Cxe7O7Y4twpYHNKH2DXfCiYs3vIZVK2OaniI2QdubFYUn+I7OZiCQck1U34+YbqA6M8IdXq5MKdC8ITMa3zTCl/mzGLH6cojNo7l91ZAhlVrV6YdpwBdXj6KUXu9kujFeStfpzfIysT0A8yvCG2zjkh0+VNevgVv6xS48qPR+wwRq3p7YNzXTVKGKsGKv5p6En3+iVQCERDVEcIywOrRd6KdSVq7ipvF2ELxqUIsH1DrcgTpRtnQpUc7PWO72VqNsYEqLK3fh7z665Q040VTXzfXbVd+IFvckEeVV3TFmlaZEnn1eeDlzuLxWKxWCwWi8VisXyaf3jsH8eZomRXAAAAAElFTkSuQmCC"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Twitter Clone</h3>
              {/* <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p> */}
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">HTML</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance developer I've
              done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div>
          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={logo}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={logo}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={logo}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src="data:image/jpeg;base64,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"
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}

export default App;
