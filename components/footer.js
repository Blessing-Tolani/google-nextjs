const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Advertising", href: "#" },
    { name: "Business", href: "#" },
  ],
  social: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Settings", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="footerbg mt-8 pl-3 static bottom-0 ttext-textc ">
      <div className="  p-4">
        <p className="text-color text-sm ">Nigeria</p>
      </div>
      <div className=" border-t border-gray-300  py-4 flex flex-col  lg:flex-row items-center lg:justify-between">
        <p className=" text-base  text-color md:mt-0 order-1 lg:order-2 flex items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
            className="Pb9hCb w-3 h-3"
            alt=""
            data-iml="1634406176860"
            data-atf="1"
            data-frt="0"
          />
          <span className="text-sm hover:underline footerp pl-1">
            Carbon neutral since 2007
          </span>
        </p>

        <div className="flex order-3 mt-2 lg:mt-0 lg:order-1">
          <nav className="" aria-label="Footer">
            {navigation.main.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-sm text-color hover:underline px-3 py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex space-x-6 mt-2 lg:mt-0 order-2 lg:order-3">
          <nav className="" aria-label="Footer">
            {navigation.social.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="text-sm text-color hover:underline px-5 py-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
