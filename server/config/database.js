require('dotenv').config();

const fs = require('fs')
const pg = require('pg')
const url = require('url')

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUaBayToSo0h6JeKQZhQ9sCJGKilMwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMjgwNDRkYWMtYzc1My00ODU4LTg3OGEtMTIyZWQ3Nzhj
M2UyIFByb2plY3QgQ0EwHhcNMjQxMDAzMTMxOTIyWhcNMzQxMDAxMTMxOTIyWjA6
MTgwNgYDVQQDDC8yODA0NGRhYy1jNzUzLTQ4NTgtODc4YS0xMjJlZDc3OGMzZTIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAOCYLPjk
loRm5xDphiNxb+MvyQku7vUIzx6lTzepx3lMhyhWYb57zyAdZxd3EypAY0UELQOx
FDubCZRcJkBU5Eaz6SbZA4s5TNts5GNFjJ4vNpmR5jDD6oRdOr+SOwqKrFizyRjQ
eg2fpqriy9RfxenuhVl988BZHDAKNZGLPdxMt2s7dDZb6WDvKucGsCICDYM5JGG/
inqp3IQ+RnPEdAdz++zVsBBp0/rENrs1Mm7LmLkLEXqaN3akYs2DkaHuwUYP8c4H
CdRJRtvQfmtcAd9DwdrGeCik4tdFS0aXhNigyrukKYv8aifzqKpTgmsH1AMcGAqu
GIWFdxuZ12YoecvOhmbdrHrtgOpeFE9EOJw9ztXNSrEm7zeUZnqvv9Rd1SytXDaH
EpQFrbycC/2kRVykH4zbR+hx0nYql2IqHMLIXqHGN/gGtlSBpSft38af4jI3tzB2
zakcp9xij58pjTt0yE4l/D3I6LdngIzN4fNuw2cPpeyb+4KcPLYn1HLeyQIDAQAB
oz8wPTAdBgNVHQ4EFgQUrv5rzX4MmWkSOVGD2QIqJ3sX2SQwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBANzXKSNkYssF6mPh
NJ43iGzFO51MV2L2GwRDF6G3rB/qWqGX1LcC/JGpavgYRinXMQyt+V9uKtUuxghE
P8UaSkeHgAVAFJmP3NMh8f8YNp8H9GtMRGqeLhdSAiuqo5ZtfaD7SwED9NkcTmcF
ttLAqTTOL4y55N55Do08iG6HvkgubB9COAC4mmC2iUgqDOoBzhlsvFOwPB8Axvkd
YoSWNJH2c8De9Q2qpeyGh+Nh53i12JZE0HoQ0/Hvhta4sgQbd6382osDczTW6RPm
0hDFncp4aunMD2ID93eacksS3yfQajmGTt9uPjJVM+wT3NfPnV6KlOZfOciR0sGz
/2jUKXYkIsg9ZK9nWvHOHa27H3fJITBUU0lQB78UcqX0W96R8GKnlOigX5I4AjPZ
t/cZKEHQbSEMW47UffKyjf+MrUEme8sOQeBFNsOui01mnjSKfI0ZnmAdivfZrNe/
QodqdTKhsPxoviGsXAEYIg/eKohYSLgGU73bGEzgMbXUl9D28A==
-----END CERTIFICATE-----`,
  },
}

const client = new pg.Client(config)
client.connect(function (err) {
  if (err) throw err
  client.query('SELECT VERSION()', [], function (err, result) {
    if (err) throw err

    console.log(result.rows[0].version)
    client.end(function (err) {
      if (err) throw err
    })
  })
})