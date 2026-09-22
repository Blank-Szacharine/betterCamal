import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSun,
  Sun,
  Wind,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface ForecastResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

const weatherDetails = (code: number) => {
  if (code === 0) return { label: 'Clear sky', Icon: Sun };
  if (code <= 2) return { label: 'Partly cloudy', Icon: CloudSun };
  if (code === 3 || code === 45 || code === 48)
    return { label: 'Cloudy', Icon: Cloud };
  if (code >= 95) return { label: 'Thunderstorms', Icon: CloudLightning };
  return { label: 'Rain showers', Icon: CloudRain };
};

const dayName = (date: string, index: number) => {
  if (index === 0) return 'Today';
  return new Intl.DateTimeFormat('en-PH', {
    weekday: 'short',
    timeZone: 'Asia/Manila',
  }).format(new Date(`${date}T12:00:00+08:00`));
};

export default function WeatherForecast() {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=18.2681&longitude=121.6825&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=celsius&wind_speed_unit=kmh&timezone=Asia%2FManila&forecast_days=3',
      { signal: controller.signal }
    )
      .then(response => {
        if (!response.ok) throw new Error('Weather forecast unavailable');
        return response.json() as Promise<ForecastResponse>;
      })
      .then(setForecast)
      .catch(error => {
        if (error.name !== 'AbortError') setHasError(true);
      });

    return () => controller.abort();
  }, []);

  const details = weatherDetails(forecast?.current.weather_code ?? 2);
  const CurrentIcon = details.Icon;

  return (
    <section
      className="bg-[#17324d] py-8"
      aria-label="Camalaniugan weather forecast"
    >
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_85%_20%,rgba(227,179,90,0.24),transparent_30%),linear-gradient(115deg,#214968,#17324d)] p-6 text-white shadow-[0_18px_45px_rgba(10,27,43,0.28)] md:p-7">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_1.9fr] lg:items-center">
            <div className="border-b border-white/15 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e3b35a]">
                Local weather
              </p>
              <div className="mt-3 flex items-center gap-4">
                <CurrentIcon
                  className="h-12 w-12 text-[#f7d780]"
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-4xl font-bold tracking-tight"
                    aria-live="polite"
                  >
                    {forecast
                      ? `${Math.round(forecast.current.temperature_2m)}°`
                      : '—'}
                  </p>
                  <p className="text-sm text-[#c8d5df]">
                    {forecast
                      ? details.label
                      : hasError
                        ? 'Forecast unavailable'
                        : 'Loading forecast…'}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#d9e4eb]">
                <span>Camalaniugan, Cagayan</span>
                {forecast && (
                  <span>
                    Feels like{' '}
                    {Math.round(forecast.current.apparent_temperature)}°
                  </span>
                )}
                {forecast && (
                  <span className="inline-flex items-center gap-1.5">
                    <Wind className="h-4 w-4 text-[#e3b35a]" />
                    {Math.round(forecast.current.wind_speed_10m)} km/h
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {forecast
                ? forecast.daily.time.map((date, index) => {
                    const day = weatherDetails(
                      forecast.daily.weather_code[index]
                    );
                    const DayIcon = day.Icon;
                    return (
                      <div
                        key={date}
                        className="rounded-xl bg-white/10 p-4 text-center"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-[#c8d5df]">
                          {dayName(date, index)}
                        </p>
                        <DayIcon
                          className="mx-auto my-3 h-7 w-7 text-[#f7d780]"
                          aria-hidden="true"
                        />
                        <p className="font-bold">
                          {Math.round(forecast.daily.temperature_2m_max[index])}
                          °
                          <span className="ml-1 font-normal text-[#b8c8d2]">
                            {Math.round(
                              forecast.daily.temperature_2m_min[index]
                            )}
                            °
                          </span>
                        </p>
                      </div>
                    );
                  })
                : [0, 1, 2].map(index => (
                    <div
                      key={index}
                      className="h-28 animate-pulse rounded-xl bg-white/10"
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
