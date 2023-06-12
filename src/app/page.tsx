'use client'
import { useEffect, useState } from 'react';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Grid from './components/Grid';
import Lottie from 'lottie-react'
import lottieloading from './assets/lottieloading.json'
import LoadingText from './components/LoadingText';
import { inputErrorMessage } from './utils/InputErrorMessage';




export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [inputError, setInputError] = useState(false);

  const getStyles = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.apiURL}`, {
        method: 'POST',
        body: JSON.stringify({
          "url": url
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (!data) {
          setError(true);
        } else {
          setData(data);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleButtonClick = async () => {
    setLoading(true);
    await getStyles();
  };

  if (data) {
    return (

      <div className="flex flex-col items-center justify-center  p-4 
      ">
       
        <h3 className="text-2xl font-bold mb-4 text-center">Here's what we found!</h3>
        <h4 className="text-lg font-medium text-center">
          Most common colors and fonts used on
        </h4>
        <p className="text-center max-w-md
        text-lg font-bold mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis">{url}</p>
        <div className="mb-2">
          <Button
            text="Scan another website"
            disabled={false}
            onClick={() => [setData(null), setLoading(false), setError(false)]}
          />
        </div>
        <Grid 
        data={data}
        />
      </div>
    )
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Lottie
          animationData={lottieloading}
          style={{ width: 400, height: 400 }}
        />
        <LoadingText />
        <Button
          text="Cancel"
          disabled={false}
          onClick={() => [setData(null), setLoading(false)]}
        />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">Scan your website!</h1>
        <h4 className="text-lg font-medium mb-6 text-center">
          Enter a website URL to get a list of the common colors and fonts used on
          the site.
        </h4>
        <div className='flex flex-row items-center justify-center gap-3
         max-sm:flex-col max-sm:items-center max-sm:justify-center
        '>
          <TextInput
            placeholder="https://example.com"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            setInputError={setInputError}
          />
          <Button
            text={loading ? 'Loading...' : 'Go!'}
            disabled={loading}
            onClick={handleButtonClick}
          />
        </div>
        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">
            There was an error scanning the website. Please try again.
          </p>
        )}
      </div>
        {inputError && (
          inputErrorMessage()
        )}
    </main>
  );
}
