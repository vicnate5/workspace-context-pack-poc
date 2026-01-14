/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 *
 * Hello World Custom Element Example
 * A simple demonstration of a Liferay Client Extension
 */

(function () {
	// Note: This must be a real ES6 class (not transpiled)
	// See: https://github.com/w3c/webcomponents/issues/587

	class LiferayHelloWorld extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.render();
		}

		render() {
			this.innerHTML = `
				<div class="hello-world-container">
					<div class="hello-world-content">
						<h1 class="hello-world-title">Hello, World!</h1>
						<p class="hello-world-message">
							Welcome to your first Liferay Client Extension
						</p>
						<p class="hello-world-description">
							This is a custom element that runs independently from Liferay's core.
							It demonstrates how to create a simple widget using Web Components.
						</p>
					</div>
				</div>
			`;
		}
	}

	// Register the custom element
	if (!customElements.get('liferay-hello-world')) {
		customElements.define('liferay-hello-world', LiferayHelloWorld);
	}
})();
