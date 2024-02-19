import React, { useEffect, useState } from 'react';
import { doctors } from '../../assets/data/doctor';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Testsmonial from '../../components/Testimonial/Testimonial';
import { BASE_URL } from '../../config';
import useFetchData from '../../Hooks/useFetchData';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loading/Loading';

const Doctors = () => {
  const [query, setQuery] = useState('');
  const [doctors, setDoctors] = useState([]);

  const [debounceQuery, setDebounceQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query.trim());
    }, 600);
    return () => clearTimeout(timeout);
  }, [query]); // Add query as a dependency

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("search check");
  };

  // const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors?query=${debounceQuery}`);
  const { data: fetchedDoctors, loading, error } = useFetchData(`${BASE_URL}/api/v1/doctors?query=${debounceQuery}`);
useEffect(() => {
  if (fetchedDoctors) {
    setDoctors(fetchedDoctors);
  }
}, [fetchedDoctors]);


  return (
    <>
      <section className='bg-[#20297D] pt-[160px]'>
        <div className='container text-center'>
          <h2 className='heading text-[#fff]'>Doctors</h2>
          <div className='max-w-[450px] mt-[30px] max-h-[44px] mx-auto bg-[#fff] rounded-md flex items-center justify-between '>
            <input
              type="search"
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctor'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className='btn bg-[#ccf0f3] mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className='flex justify-center text-primaryColor'> {/* Flex container wraps around the grid */}
              <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {doctors.length === 0 ? (
                  <div className='font-bold text-center text-[18px]'>
                    <p>No doctor found...😢</p>
                  </div>
                ) : (
                  doctors.map((doctor, index) => <DoctorCard key={doctor.id || index} doctor={doctor} />)
                )}

              </div>
            </div>
          )}
        </div>
      </section>


      {/* <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patients say</h2>
            <p className='text__para text-center text-textColor'>world-class care for everyone. Our health System offers unmatched, expert health care</p>
          </div>
          <Testsmonial />
        </div>
      </section> */}
    </>
  );
};

export default Doctors;
