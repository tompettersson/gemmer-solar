<section id="act-contact">
	<div class="relative bg-white">
		<div class="absolute inset-0">
			<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
		</div>
		<div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
			<div class="bg-gray-50 px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
				<div class="mx-auto max-w-lg">
					<h2 class="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">Kontakt</h2>
					<p class="mt-3 text-lg leading-6 text-zinc-700">
						Wie können wir Ihnen helfen? Wir freuen uns von Ihnen zu hören.
					</p>
					<dl class="mt-8 text-base text-zinc-700">
						<div>
							<dt class="sr-only">Adresse</dt>
							<dd>
								<p>Gemmer-Solar GmbH</p>
								<p>
									Ortsstraße 13<br />
									D-56379 Scheidt
								</p>
							</dd>
						</div>
						<div class="mt-6">
							<dt class="sr-only">Mobiltelefon</dt>
							<dd class="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="h-6 w-6 flex-shrink-0 text-zinc-700"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
									/>
								</svg>

								<span class="ml-3">Mobil: 0151-56288994</span><br />
							</dd>
							<div class="mt-6">
								<dd class="flex">
									<!-- Heroicon name: outline/phone -->
									<svg
										class="h-6 w-6 flex-shrink-0 text-zinc-700"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<span class="ml-3">Festnetz: 06439-9295983</span>
								</dd>
							</div>
						</div>

						<div class="mt-6">
							<dt class="sr-only">Email</dt>
							<dd class="flex">
								<!-- Heroicon name: outline/mail -->
								<svg
									class="h-6 w-6 flex-shrink-0 text-zinc-700"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span class="ml-3"
									><a class="border-b-2" href="mailto:info@gemmer-solar.de">info@gemmer-solar.de</a
									></span
								>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div class="bg-white px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
				<div class="mx-auto mb-12 max-w-lg lg:max-w-none">
					<form method="POST" action="/miniform" class="mb-12 grid grid-cols-1 gap-y-6">
						<div>
							<label for="full-name" class="sr-only">Vollständiger Name</label>
							<input
								type="text"
								name="full-name"
								id="full-name"
								autocomplete="name"
								class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gemmer-700 focus:ring-gemmer-600"
								placeholder="Vollständiger Name"
							/>
						</div>
						<div>
							<label for="email" class="sr-only">E-Mail-Adresse</label>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gemmer-700 focus:ring-gemmer-600"
								placeholder="E-Mail-Adresse"
							/>
						</div>
						<div>
							<label for="phone" class="sr-only">Telefonnummer</label>
							<input
								type="text"
								name="phone"
								id="phone"
								autocomplete="tel"
								class="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gemmer-700 focus:ring-gemmer-600"
								placeholder="Telefonnummer"
							/>
						</div>
						<div>
							<label for="message" class="sr-only">Ihre Nachricht</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								class="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-gemmer-700 focus:ring-gemmer-600"
								placeholder="Ihre Nachricht"
							/>
						</div>

						<div class="relative flex items-start">
							<div class="flex h-5 items-center">
								<input
									id="comments"
									name="comments"
									type="checkbox"
									class="h-4 w-4 rounded border-gray-300 text-gemmer-500 focus:ring-gemmer-500"
								/>
							</div>
							<div class="ml-3 text-sm">
								<p class="text-zinc-700">
									Ich habe die <a href="./datenschutz.html" class="border-b-2"
										>Datenschutzbestimmungen</a
									> zur Kenntnis genommen.
								</p>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="inline-flex justify-center rounded-md border border-transparent bg-gemmer-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gemmer-500 focus:outline-none focus:ring-2 focus:ring-gemmer-500 focus:ring-offset-2"
								>Formular abschicken</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
