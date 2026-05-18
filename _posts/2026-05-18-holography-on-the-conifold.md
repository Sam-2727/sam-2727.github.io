---
layout: post
title: "Holography on the Conifold"
date: 2026-05-18
category: technical
description: "Notes on the Klebanov-Witten AdS/CFT duality for D3-branes on the conifold."
---

* TOC
{:toc}

## The claim
I present evidence of the AdS/CFT duality between $\mathcal{N}=1,SU(N)\times SU(N)$ gauge theory with bifundamental matter fields $A,B$ to type IIB string theory on $AdS&#95;5\times T^{1,1}$. I will discuss the main features of this duality, including the matching of symmetries of the gauge theory to the bulk, as well as a few different examples of what different operators in the gauge theory correspond to in the bulk, with precise matching of the scaling dimension to mass.

## The conifold and $T^{1,1}$
When we discussed $\mathcal{N}=4$ SYM dual to $AdS&#95;5\times S^5$, we started by putting a stack of D3-branes in flat space. This time, we will put a stack of D3-branes on the tip of the conifold. First we must explain what the conifold is.

The conifold can be described by complex coordinates $z&#95;1,z&#95;2,z&#95;3,z&#95;4$ subject to the constraint

$$
\begin{align}
\sum_i z_i^2&=0
\end{align}
$$

Redefining the coordinates as $z&#95;{11}=z&#95;3+iz&#95;4,z&#95;{12}=z&#95;1-iz&#95;2,z&#95;{21}=z&#95;1+iz&#95;2,z&#95;{22}=-z&#95;3+iz&#95;4$, the equation $\sum&#95;i z&#95;i^2=0$ can be re-expressed as $\det W=0$, with

$$
\begin{align}
W&\equiv \begin{bmatrix}
z_{11}&z_{12}\\
z_{21}&z_{22}
\end{bmatrix}
\end{align}
$$

 First of all, on the conifold, on its smooth part at least, is a holomorphic submanifold of $\mathbb{C}^4$ so inherits its Kahler form:

$$
\begin{align}
\omega_{\mathcal{C}}&=\frac{i}{2}(\sum_{ij}dz_{ij}\wedge d\bar{z}_{ij}).
\end{align}
$$

(that being said, this will not be the Ricci-flat Kahler form used below which determines the metric on the Conifold, but in order to prove it is Calabi-Yau, it is enough to show the existence of some Kahler form, not necessarily the Ricci flat one).

Second of all, there is a holomorphic top-form on the manifold, defined in the local coordinate system where $z&#95;{11}\neq 0$ as

$$
\begin{align}
\frac{d z_{11}\wedge dz_{12}\wedge dz_{21}}{z_{11}}.
\end{align}
$$

Therefore, the Conifold is a Calabi-Yau 3-fold, implying it preserves $\mathcal{N}=2$ SUSY in the $\mathbb{R}^4\times \mathcal{C}$ spacetime. Meanwhile, if we put a D3-brane on the conifold, the spacetime supersymmetry will be broken to $\mathcal{N}=1$ SUSY from the perspective of the 4d theory.

Because the manifold is Calabi-Yau, the metric takes a Hermitian form as the derivative of the Kahler potential, which in the case of the conifold happens to be globally defined. In any 3-dim complex coordinate system compatible with the complex structure of the conifold, the metric takes the form

$$
\begin{align}
ds^2_6&=2g_{i\bar{j}}dz^i dz^{\bar{j}}\\
g_{i\bar{j}}&=\partial_i \partial_{\bar{j}} K\\
K&=\frac{3}{4}(\operatorname{Tr} (W^\dagger W))^{\frac{2}{3}},
\end{align}
$$

where $K$ is the Kahler potential, which in this case is globally defined (this is allowed because the Calabi-Yau geometry is non-compact).

There are various other useful coordinate systems of the conifold. The following two will be useful to us. A practically more useful coordinate system is to redefine

$$
\begin{align}
z_{11}&=-\left(\tfrac{2}{3}\right)^{\frac{3}{4}}r^{\frac{3}{2}}e^{\frac{i}{2}(\psi+\phi_1-\phi_2)}\cos\tfrac{\theta_1}{2}\sin \tfrac{\theta_2}{2}\\
z_{12}&=\left(\tfrac{2}{3}\right)^{\frac{3}{4}}r^{\frac{3}{2}}e^{\frac{i}{2}(\psi+\phi_1+\phi_2)}\cos\tfrac{\theta_1}{2}\cos\tfrac{\theta_2}{2}\\
z_{21}&=-\left(\tfrac{2}{3}\right)^{\frac{3}{4}}r^{\frac{3}{2}}e^{\frac{i}{2}(\psi-\phi_1-\phi_2)}\sin \tfrac{\theta_1}{2}\sin \tfrac{\theta_2}{2}\\
z_{22}&=\left(\tfrac{2}{3}\right)^{\frac{3}{4}}r^{\frac{3}{2}}e^{\frac{i}{2}(\psi-\phi_1+\phi_2)}\sin \tfrac{\theta_1}{2}\cos \tfrac{\theta_2}{2},
\end{align}
$$

with $\psi\in [0,4\pi],\theta&#95;i\in [0,\pi],\phi\in [0,2\pi]$.

In such a coordinate system, the metric can be written as

$$
\begin{align}
ds_6^2&=dr^2+r^2 ds_{T^{1,1}}^2,
\end{align}
$$

where $T^{1,1}$ has the metric

$$
\begin{align}
ds^2_{T^{1,1}}&=\frac{1}{9}\left(d\psi+\cos\theta_1d\phi_1+\cos\theta_2d\phi_2\right)^2+\frac{1}{6}\sum_{a=1}^2(d\theta_a^2+\sin^2\theta_ad\phi_a^2).
\end{align}
$$

<a id="fig-conifold-cone"></a>

![Conifold cone figure]({{ "/assets/img/conifold_cone.svg" | relative_url }})

*A schematic depiction of the conifold as a cone over $T^{1,1}$. The tip represents the conifold singularity.*

In this coordinate system, the nature of the singularity is clear: the only metric of the form $dr^2+r^2ds^2&#95;\text{compact}$ that is non-singular is if the compact space is $S^5$. Here, $T^{1,1}$ is not $S^5$, so we have a curvature and coordinate singularity at the origin $r=0$ (this can be parameterized using the Kretschmann scalar $&#124;\text{Riemann}&#124;^2=R&#95;{abcd}R^{abcd}$, which diverges as $1/r^4$). This leads to our first rough depiction of the conifold in [the conifold cone figure](#fig-conifold-cone).

This is the $T^{1,1}$ we will eventually want in our decoupling limit, so let's study its properties a bit. First of all, $(\theta&#95;i,\phi&#95;i)$ parameterize a set of two $S^2$, with the $\psi$ coordinate giving a $S^1$ fiber over the two $S^2$ factors.

Another viewpoint comes from the other coordinate system. In the $z$ coordinate system, define

$$
\begin{align}
\rho^2=\sum_{i=1}^4 2|z_i|^2=\operatorname{Tr}(W^\dagger W)=(\frac{2}{3})^{3/2}r^3
\end{align}
$$

One can expand $z&#95;i=x&#95;i+iy&#95;i$ such that the conifold equations reduce to

$$
\begin{align}
\sum_i x_i y_i=0,\sum_i x_i^2=\sum_i y_i^2=\frac{\rho^2}{4}.
\end{align}
$$
 

<a id="fig-conifold-pyramid"></a>

![Conifold topology figure]({{ "/assets/img/conifold_pyramid.svg" | relative_url }})

*A slightly improved depiction of the conifold, with the $S^2\times S^3$ topology of $T^{1,1}$ manifest.*

At fixed radius (i.e. studying $T^{1,1}$), one can parameterize $x&#95;i$ as $S^3$. With the condition that $Y$ is orthogonal to $X$, this is precisely saying that $Y$ is an element of the tangent space of $X$ with norm 1, i.e. is equal to $S^2$. It turns out that this fiber is trivial topologically, so $T^{1,1}$ is, topologically, $S^2\times S^3$, although geometrically the size of the $S^2$ and $S^3$ are tied together. Therefore, an improved depiction of the conifold is as in [the conifold topology figure](#fig-conifold-pyramid).

The most useful description of $T^{1,1}$ is in fact as the coset of Lie groups:

$$
\begin{align}
\frac{SU(2)\times SU(2)}{U(1)}.
\end{align}
$$

(this is diffeomorphic to the previous $S^2\times S^3$ description). 

Defining the standard generators of the SU(2) factors as $t&#95;1,t&#95;2,t&#95;3,\hat{t}&#95;1,\hat{t}&#95;2,\hat{t}&#95;3$, and defining the $U(1)$ factor, by convention, to be generated by $t&#95;3-\hat{t}&#95;3$, the coset (which is not an algebra itself since $t&#95;3-\hat{t}&#95;3$ is not an ideal) is described by the span of $t&#95;1,t&#95;2,\hat{t}&#95;1,\hat{t}&#95;2, t&#95;3+\hat{t}&#95;3$ (plus disconnected components). 

The quotient at the level of group elements is then described by an equivalence class of right-actions, i.e. points in $T^{1,1}$ are given by equivalence classes: $(g&#95;A,g&#95;B)\equiv [(g&#95;A,g&#95;B)h&#95;\alpha]$, for $h&#95;\alpha=(e^{i\alpha t&#95;3},e^{-i\alpha t&#95;3})$. Such a redundancy of description will be important later in the discussion of a $U(1)&#95;B$ symmetry on the dual gauge theory.

The normalization of the Lie algebra induces a canonical normalization on a basis of one-forms (roughly speaking, the one-form dual to the tangent vector which generates the same action as the Lie-algebra element). For the purposes of this, we take the normalization of the generators to be the standard $[t&#95;i,t&#95;j]=i\epsilon&#95;{ijk}t&#95;k$.  Define $e^1,e^2,\hat{e}^1,\hat{e}^2$ to be the canonical one-forms for the generators $t&#95;1,t&#95;2,\hat{t}&#95;1,\hat{t}&#95;2$ of the two $SU(2)$ factors, and $e^5$ to be the one-form dual to $t&#95;3+\hat{t}&#95;3$. 

To be specific, the normalization of the one-forms for each $SU(2)$ factor comes from expanding $g^{-1}dg$ as

$$
\begin{align}
g^{-1}dg&=\sum_i \omega_i T_i
\end{align}
$$

For example, for $SU(2)$, parameterized by three angles $\phi,\theta,\psi$, connected components of the identity are of the form $g=e^{\phi T&#95;1}e^{\theta T&#95;2}e^{\psi T&#95;3}$. Writing $dg=\frac{\partial g}{d\theta&#95;i}d\theta&#95;i$, one finds

$$
\begin{align}
g^{-1}dg&=(\sin\psi d\theta-\sin\theta \cos\psi d\phi)T_1+(\cos\psi d\theta+\sin\theta \sin\psi d\phi)T_2+(d\psi+\cos\theta d\phi) T_3
\end{align}
$$

Now, in the quotient of the $U(1)$ generated by $T&#95;3-\tilde{T}&#95;3$, which acts on the angles $\psi&#95;1,\psi&#95;2$ by $\psi&#95;1\to \psi&#95;1+\alpha,\psi&#95;2\to \psi&#95;2-\alpha$, the invariant angle is $\psi=\psi&#95;1+\psi&#95;2$, for which one choice is $\psi&#95;1=0,\psi&#95;2=\psi$.

Therefore, a basis of canonical one-forms on the quotient manifold is given by

$$
\begin{align}
e^1&=-\sin \theta_1 d\phi_1\\
e^2&=d\theta_1\\
\hat{e}^1&=\cos \psi \sin\theta_2d\phi_2-\sin \psi d\theta_2\\
\hat{e}^2&=\sin \psi\sin\theta_2 d\phi_2+\cos\psi d\theta_2\\
e^5&=d\psi+\cos\theta_1d\phi_1+\cos\theta_2 d\phi_2,
\end{align}
$$

We want a metric on the quotient manifold that is invariant under the left action of $\exp(\alpha(T&#95;3-\hat{T}&#95;3)$. Such an element rotates $(T&#95;1,T&#95;2)$ between themselves by an element $R$ of $SO(2)$, leaving the diagonal combination $(e^1)^2+(e^2)^2$ unchanged. A natural metric on the coset is then

$$
\begin{align}
\label{eq:cosetMetric}
ds^2&=a((e^1)^2+(e^2)^2)+b((\hat{e}^1)^2+(\hat{e}^2)^2)+c(e^5)^2.
\end{align}
$$
 

The coefficients are fixed by the condition that the conifold is Ricci flat, which gives

$$
\begin{align}
a=b=\frac{1}{6},c=\frac{1}{9},
\end{align}
$$

which matches the metric we had originally.

### Resolved conifold

There are two ways to modify the geometry to be non-singular, while preserving the manifold to be Calabi-Yau. In the deformed conifold, one takes

$$
\begin{align}
\sum_i z_i^2&=\varepsilon^2
\end{align}
$$

and in the resolved conifold,

$$
\begin{align}
W\begin{bmatrix}
\nu_1\\
\nu_2
\end{bmatrix}&=0
\end{align}
$$

where $\nu&#95;1,\nu&#95;2$ are projective coordinates on $\mathbb{CP}^1$. 

The deformed conifold replaces the singularity with a finite $S^3$, while the resolved conifold replaces it with a finite $S^2$.

It is insightful to study both, but for our purposes we will investigate primarily the latter. Observe that the when the matrix $W$ is nonzero, $[\nu&#95;1:\nu&#95;2]$ are defined uniquely (there is just one null vector), while at the based of the conifold, where $W=0$, $[\nu&#95;1:\nu&#95;2]$ is an independent coordinate.

It is most transparent to see the blown-up nature of the singularity by looking at the metric. The metric, in the resolved conifold, can be determined to be

$$
\begin{align}
ds^2&=\frac{\partial \gamma}{\partial \rho^2}\left[d\rho^2+\frac{1}{4}\rho^2(d\psi+\sum_{i=1}^2 \cos\theta_i d\phi_i)^2\right]+\frac{1}{4}\gamma\sum_{i=1}^2(d\theta_i^2+\sin^2\theta_id\phi_i^2)\\
&+a^2(d\theta_2^2+\sin^2 \theta_2 d\phi_2^2),
\end{align}
$$

where $\gamma$ has the asymptotic behavior 

$$
\begin{align}
\gamma&=\frac{1}{\sqrt{6}}a^{-1}\rho^2-\frac{1}{72}a^{-4}\rho^4 +\mathcal{O}(\rho^6),~~~\rho\to 0;
\gamma&=\rho^{\frac{4}{3}}-2a^2+4a^4\rho^{-\frac{4}{3}} +\mathcal{O}(\rho^{-\frac{8}{3}}),~~~\rho\to \infty,
\end{align}
$$

which implies that that the geometry is non-singular at $\rho=0$, with the resolved $S^2$ being parameterized by a sphere of radius $a$. The parameter $a$ is a free parameter, and can be tuned arbitrarily close to zero, giving the singular conifold in this limit.

<a id="fig-resolved-conifold"></a>

![Resolved conifold figure]({{ "/assets/img/resolved_conifold.svg" | relative_url }})

*A schematic depiction of the resolved conifold, showing that at the base there is a finite $S^2$ while the $S^3$ still shrinks.*

The drawing typically given for the resolved conifold is in [the resolved conifold figure](#fig-resolved-conifold), i.e. at the $\rho=0$ section, we still have an $S^2$ worth of degrees of freedom.

## D3- and D5-branes on the conifold

### The general picture
One can place D3-branes anywhere on the conifold, but the most interesting place to put a stack of D3-branes in the singular conifold will be at the singularity. The conifold is locally smooth away from the singularity, so a stack of D3-branes away from the singularity we might expect to have the low-energy physics as in flat $\mathbb{R}^6$. Under such a suggestion, we will just get $\mathcal{N}=4$ SYM again, as will be seen later on.

It is best to see what is going on in the resolved picture and then take the resolution parameter $a$ to zero. The process of putting D3-branes at the singularity of the conifold should be viewed somewhat schematically, as there is no "proof" that such an operation is well-defined. Nonetheless, I will present non-trivial evidence that putting D3-branes at the tip of the conifold is a valid operation, along the way understanding why the gauge group is $SU(N)\times SU(N)$, which seems odd considering the gauge fields on a stack of D3-branes would naively give $U(N)$.

The intuition here is that we can wrap D5-branes and anti-D5-branes on the resolved part of $\rho=0$, then shrink the resolution to zero, viewing a combination of D5-brane and anti-D5-brane as a D3-brane. This seems odd, but we can partially motivate it by considering the general WZ Term of the D5-brane 

$$
\begin{align}
&\mu_5\int_{W_6}\sum_q P[C_q] \wedge e^{P[B_2]+2\pi \alpha' F}\\
&=\mu_5 \int_{W(\mathbb{R}^4)\times W(\Sigma)} P[C_6]+\mu_5 \int_{\mathbb{R}^4\times \Sigma}C_4\wedge (B_2+2\pi\alpha' F),
\end{align}
$$

where we wrap the brane on the resolved $S^2$, defined as $\Sigma$, at $\rho=0$ in the resolved conifold, and $P$ represents pullback to the worldvolume. Also, we are considering worldvolume coordinates that factorize to parameterize $\mathbb{R}^4$ and $\Sigma$ (a good choice would be, e.g. static gauge). Here, $\mu&#95;5$ is the RR charge of the D5-brane. One has that $&#124;\mu&#95;5&#124;=T&#95;5$ (in the convention where tension does not depend on string coupling), but the sign will depend on if one takes a D5-brane or anti-D5-brane of opposite charge.

We would like to view this wrapped D5-brane in the limit where the resolution is small (i.e. the parameter $a$ in the metric is sent to zero). In such a configuration, the wrapped part of the D-brane becomes tiny and from the point of view of $\mathbb{R}^4$ it will roughly speaking look like a D3-brane at the tip of the singular conifold.

For such a D3-brane, assuming it even exists as a well-defined configuration, has $C&#95;4$, or equivalently $F&#95;5$, charge

$$
\begin{align}
&\frac{\mu_5}{\mu_3}\int_{\Sigma}(P[B_2]+2\pi \alpha' F)\\
&=\frac{1}{(2\pi)^2 \alpha'}\int_\Sigma (P[B_2]+2\pi \alpha' F)\\
&=b+n\\
b&\equiv \frac{1}{(2\pi)^2 \alpha'}\int_\Sigma P[B_2]\\
n&\equiv \frac{1}{2\pi}\int_\Sigma F\in \mathbb{Z}.
\end{align}
$$

The flux over $F$ is quantized because it is a field strength of a $U(1)$ gauge field.

Consider the case of $n=0$, i.e. no $F$ flux on the D3-brane. The effective D3-brane charge is then $b$. Take $b=\frac{1}{2}$ (note that this is a convenient choice, but that the final total charge will not dependend on the choice of $b$. Later we will require $b$ to be a moduli field, so it better be that $b$ isn't fixed). Now consider the case of anti-D5-brane, which has in its effective action the opposite sign in front of the WZ term, so in terms of the wrapping cycle can equivalently be described by a D5-brane wrapping $\Sigma$ with opposite orientation (here, we will take the convention that the anti-D5-brane has the same orientation as the D5-brane). Now, take an anti-D5-brane with -1 unit of $F$ flux (the $F$ flux is intrinsic to each D-brane so can be tuned to whatever we want per D-brane, but is quantized because its a field strength, while $B&#95;2$ is a gauge field). Then the effective D3-brane charge on the anti-D5-brane is $\frac{1}{2}$ as well, since the anti-D5-brane has opposite charge.

If we stack a wrapped D5-brane and wrapped anti-D5-brane, supposing for a second that such an operation is possible and preserves supersymmetry, then one observes that the opposite charges of the D5-branes under $C&#95;6$ cancel out. Additionally, the effective charge of $C&#95;4$, in the D3-brane description is 1, which is exactly the charge of a D3-brane. For general $b$ and $n&#95;{\text{D5}}=0,n&#95;{\text{anti-D5}}=-1$, one will have $b$ effective-charge contribution from the D5-brane and $1-b$ effective charge contribution from the anti-D5-brane, such that the pair has total D3-brane charge 1.

An additional consistency check is the tension. The tension can be termed from the Nambu-Goto part of the D5-brane effective action, which is

$$
\begin{align}
-T'_5\int d^{6}\zeta \sqrt{-\det(P(G+B)_{ab}+2\pi \alpha' F_{ab})},
\end{align}
$$

where $P$ represents the pullback of the spacetime fields $G,B$ to the worldvolume of the D5-brane, parameterized by $\zeta$. Here, unlike previously discussed with the WZ term in terms of $T&#95;5$, $T'&#95;5$ and later $T'&#95;3$ are the physical tensions at constant dilaton, such that $e^{-\Phi}=1/g&#95;{IIB}$ has been absorbed into the definition of tension). Following the conventions of the string notes,

$$
\begin{align}
T'_p&=\frac{1}{g_B (2\pi)^p (\alpha')^{(p+1)/2}}\\
\end{align}
$$

Meanwhile, $F$ is the field strength of an intrinisic $U(1)$ gauge field on the D5-brane worldvolume.

Assuming that $B,F$ only take indices along the internal $T^{1,1}$, the effective 4d tension can be compute as the integral over the internal part of this only, along the 2-cycle the D5-brane is wrapping. With the D5-brane wrapping worldvolume wrapping the $\Sigma$ cycle, consider worldvolume coordinates $(x^\alpha,\sigma^m)$, with $x^a$ parameterizing the D5-brane along the $\mathbb{R}^4$ and $\sigma^m$ along the wrapped surface. Define

$$
\begin{align}
\mathcal{F}&\equiv B_{ab}+2\pi \alpha' F_{ab}
\end{align}
$$

Then the metric plus $\mathcal{F}$ factorizes as

$$
\begin{align}
P[G]+\mathcal{F}&=\begin{bmatrix}
G_{\alpha \beta}^{(4)}&0\\
0&g_{mn}^{\Sigma}+\mathcal{F}_{mn},
\end{bmatrix}
\end{align}
$$

Then the determinant factorizes as

$$
\begin{align}
-T_5\int d^4 x\int d^2 \sigma \sqrt{-\det G^{(4)}} \sqrt{\det G_{mn}+\mathcal{F}_{12}^2}
\end{align}
$$

We can then define the effective D3-brane tension as

$$
\begin{align}
T_5\int d^2\sigma \sqrt{\det g_{mn}+\mathcal{F}_{12}^2}
\end{align}
$$

If a D5-brane wraps a holomorphic submanifold, which in fact the $\mathbb{CP}^1$ is one, it is a BPS configuration. In such a holomorphic submanifold, the area form can be written as $A&#95;c \omega$, where $\omega$ is dual to the holomorphic curve with normalization 1 (on the holomorphic curve, the area form is the restriction of the Kahler form to the curve).

Assuming $B&#95;2$ is flat, i.e. $H&#95;3=0$, then one can take $B&#95;2$ to be proportional to $\omega$ up to an irrelevant exact term. We also assume that $F$ is also proportional to $\omega$, such that it preserves the isometries of the $SU(2)$ the brane is wrapping. Consequently, one can perform the integration to get that

$$
\begin{align}
T_{3,eff}&=(2\pi )^2\alpha'T_5\left|(n+b)+iA\right|\\
&=T_3\left|(n+b)+iA\right|\\
A&\equiv \frac{1}{(2\pi)^2 \alpha'}\int J
\end{align}
$$

In the limit that $A\to 0$, and with $n+b=\frac{1}{2}$, this is equal to $\frac{T&#95;3}{2}$. Therefore, the two fractional D3-branes have exactly half the D3-brane tension.

One final check one can do is to verify that the two wrapped D5-branes preserve the same supersymmetries. The combination of the supersymmetries preserved by a D-brane configuration is determined by the argument of its central charge. 

The tension is equal to the magnitude of the central charge, but one might expect the overall central charge to be given by

$$
\begin{align}
Z&=T_3((n+b)\pm iA).
\end{align}
$$

To actually verify that as the resolution goes to zero, the bound state of D5 and anti-D5-branes preserves half of supersymmetries, one can inspect the form of the $\kappa$-symmetry, which will be analyzed extensively soon.

### Interlude: a self-contained introduction to $\kappa$-symmetry
**Note: this section is somewhat out of the order of the broader paper, and is really just for self-curiosity. The details pertinent to the computation at hand are in [the section on the wrapped D5-brane system](#sec-continued).**

We did not justify the sign of the central charge in the D5-brane computation. The full justification comes from $\kappa$-symmetry. While trying to explain this to myself, I realized that I don't know the full derivation, in a general background, of $\kappa$-symmetry for Dp-branes. So I present part of a self-contained derivation here, mainly focusing on type IIB. The specialization to D5-branes with the specific flux setup we are considering will be in the next section.

A Dp-brane configuration is parameterized, in the effective action picture, by worldvolume coordinates $\zeta^a,a=0,...,p$, with embedding spacetime coordinates $X^\mu(\zeta),\mu=0,...,9$, U(1) gauge field $A&#95;a$, fermion fields $\theta^{\alpha I}, I=1,2$, i.e. a pair of same-chirality Weyl-Majorana fermions that transform in the $so(1,9)$ representation. The issue is that there is an overparameterization of the embedding of the worldvolume of the Dp-brane. In general, one would expect the Dp-brane to preserve half the supersymmetries, but under the embedding, there is a full set of spacetime fermion fields $\theta$. Therefore, $\kappa$-symmetry is a highly non-linear redundancy in the worldvolume embedding of the fermionic components of the supersymmetric D-brane. In the case of a classical brane configuration, where the worldvolume fields vanish, i.e. $\theta=0$, the supersymmetries preserved by the D-brane can be written as

$$
\begin{align}
(\delta_\epsilon+\delta_\kappa)\theta=0,
\end{align}
$$

such that a combination of $\kappa$ and supersymmetry preserves the classical D-brane configuration. Therefore at the practical level, the study of $\kappa$-symmetry allows one to find the mutual supersymmetries preserved by a collection of D-brane configurations. Since we are studying D-branes in a non-flat background and wrapping a non-trivial cycle with non-trivial flux, in this section I will study the most general formalism of $\kappa$-symmetry of the low-energy D-brane action.

Analogously to the Green-Schwartz effective action, one can derive the minimal supersymmetric action in superspace coordinates, for general supersymmetric background (not just with $\theta=0$ as is done in the string notes). Defining $Z^M\equiv (X^m,\theta^{\alpha,\beta})$. The supervielbein is defined as $E^A=dZ^M E&#95;{M}{}^A(Z)$. The vielbein pulled back to the $D5$-brane worldvolume has components $E&#95;{i}{}^A=\partial&#95;i Z^M E&#95;{m}{}^A$, which we will equivalently denote as $\hat{E}^A=d\zeta^i E&#95;{i}{}^A$. With the supermetric $G&#95;{MN}(\mathcal{Z})=E&#95;{M}{}^aE&#95;{N}{}^b\eta&#95;{ab}$, the pulled back supermetric becomes

$$
\begin{align}
g_{ij}&=\partial_i Z^M \partial_j Z^N G_{MN}(Z).
\end{align}
$$

Also analogously to the Green-Schwartz effective action, the super-B-field is defined as

$$
\begin{align}
B&\equiv \frac{1}{2}(d Z^M\wedge  d Z^N) B_{NM}(Z).
\end{align}
$$

The general form of the D-brane effective action (which will be taken without proof, but is seen to easily generalize the bosonic field configuration) is, with $\mathcal{F}\equiv P[B]+2\pi \alpha' F$,

$$
\begin{align}
S_{Dp}&=-T_p\int d^{p+1}\zeta e^{-\Phi(Z)}\sqrt{-\det (G_{ij}+\mathcal{F}_{ij})}+\mu_p\int d^{p+1}\zeta P[C]\wedge e^{\mathcal{F}}
\end{align}
$$

The question is then, what is the form of $\kappa$-symmetry on this action? $\kappa$-symmetry is viewed as a redundancy of the fermionic degrees of freedom, and therefore should act as $\iota&#95;\kappa E^a=0$ for the bosonic directions $a$, with $\iota&#95;\kappa=\delta&#95;\kappa \mathcal{Z}^M \frac{\partial}{\partial \mathcal{Z}^M}$ (in general, the notation here is supposed to be taken analogous to the normal differential geometry definition of the interior product $\iota&#95;V$, except now applied to supervector spaces).

To introduce the action of $\kappa$-symmetry on other components, we introduce an $SO(1,9)$ connection matrix-valued 1-form $\Omega&#95;{AB}$ (the index of the one-form is suppressed). $\Omega&#95;{AB}$ acts on whatever representation of the Lorentz group is present: either vector or spinor representations as $\Omega&#95;\rho=\Omega&#95;{mn}\rho(T&#95;{mn})$, where $\rho(T&#95;{mn})$ is a representation of the generator $T&#95;{mn}$. For example, on vector representations, $\Omega&#95;{AB}$ is just the fundamental connection $\Omega&#95;{mn}=-\Omega&#95;{nm}$, while its spinor indices take the form $\Omega&#95;{\alpha}{}^\beta=\frac{1}{4}(\Gamma^{mn})&#95;{\alpha}{}^\beta\Omega&#95;{mn}$.

 Define the torsion, exactly as in the Green-Schwartz action, as

$$
\begin{align}
T^A&\equiv \frac{1}{2}E^B E^CT_{CB}{}^A\\
&\equiv dE^A+E^B\Omega_B{}^A,
\end{align}
$$

where it is presumed that a sufficient definition of "exterior derivative" exists for superspace quantities (explicitly, $dE^A=-dZ^M\wedge dZ^N\partial&#95;NE&#95;{M}{}^A$). There are various conventions for the constraints imposed by type IIB supergravity in the superspace formalism. Define the index $\bar{\alpha}=(\alpha I)$, $I=(1,2)$ labeling the given chirality, such that the effect of the chirality labels can be packaged into $\delta&#95;{IJ},(\sigma&#95;3)&#95;{IJ})$ (this differs from the convention of the string notes of packaging the chirality labels separately but is more convenient in these computations). Then the constraints on the type IIB superspace turn out to be

$$
\begin{align}
T_{\alpha I,\beta J}^m&=-2i\delta_{IJ}\Gamma_{\alpha\beta}^m\\
H_{a,\alpha I,\beta J}&=-2i (\sigma_3)_{IJ}(\Gamma_a)_{\alpha\beta}\\
H_{ab,\gamma I}&=(\Gamma_{ab})(\sigma_3)_I^J\Lambda_{\gamma J}\\
\Lambda_{\alpha I}&\equiv \frac{1}{2}E_{\alpha}^M \partial_M \Phi\\
D_{\alpha I} C_0&=2e^{-\Phi}(i\sigma_2  \Lambda)_{\alpha I}
\end{align}
$$

(These identities were transcribed from arXiv:9611159 and converted from Einstein frame to string frame). 

The identity on $H&#95;{ab,\gamma I}$ follows from the identity on $H&#95;{a,\alpha I,\beta J}$ and the Bianchi identity: $dH=0$. Throughout the rest of this demonstration, we will alternate between using $\alpha I$ notation and $\bar{\alpha}\equiv \alpha I$.

Finally, take for granted the following $\kappa$-symmetry variations, which it will turn out the action is invariant under:

$$
\begin{align}
\iota_\kappa E^\alpha&=[\kappa(1-\Upsilon)]^\alpha,\\
2\pi \alpha'\delta_\kappa F&=-dP[\iota_\kappa B_2],
\end{align}
$$

such that 

$$
\begin{align}
\delta_\kappa \mathcal{F}&=P[\iota_\kappa H_3].
\end{align}
$$

While the transformation $\iota&#95;\kappa$ on $E^a$ was defined to be zero, we define the transformation $\iota&#95;\kappa E^\alpha=[\kappa(1-\Upsilon)]^\alpha$ to take the form of a projection operator (presuming $\Upsilon^2=1,\operatorname{Tr} \Upsilon=0$, which will turn out to be the case), projecting to half of the components of supersymmetries. The precise form of $\Upsilon$ necessary to cancel the variation of the action will be determined soon.

The next step is to find the action of $\kappa$ symmetry on the pulled back metric. Say that $\iota&#95;\kappa E^A=V^A$.
Then defining $\hat{E}^A\equiv P[E^A]$, one has

$$
\begin{align}
\delta_\kappa \hat{E}^A&=P[\mathcal{L}_{K_\kappa}E^A],~~~(K_\kappa=\delta_\kappa Z^M \partial_M),~~~(M=G+\mathcal{F})\\
&=P[i_\kappa T^A-i_\kappa(E^B\wedge \Omega_B{}^A)+dV^A]\\
&=P[dV^A+\Omega_B{}^A V^B+E^B V^C T_{CB}{}^A-E^B i_\kappa \Omega_B{}^A]\\
&= \hat{V}^A+\hat{\Omega}_B{}^A V^B+\hat{E}^B V^C T_{CB}{}^A-\hat{E}^B i_\kappa \Omega_B{}^A,~~~(\hat{V}_i{}^A\equiv \partial_i V^A),
\end{align}
$$

with $\hat{\Omega}$ defined analogously to $\hat{E}$.

Now, one can apply this to the pullback of the metric, as

$$
\begin{align}
\delta_\kappa g_{ij}&=\eta_{ab}(\delta_\kappa E_i{}^a )E_j{}^b+E_i{}^a(\delta_\kappa E_j{}^b)\\
&=\eta_{ab}(E_i{}^B V^C T_{CB}{}^a E_j{}^b+E_i{}^a E_j{}^B V^C T_{CB}{}^b),
\end{align}
$$

where $V^a=0$ for spacetime index $a$, and the antisymmetrization of $\Omega&#95;{ab}=-\Omega&#95;{ba}$ was used.

In sum, one has that

$$
\begin{align}
\delta_\kappa g_{ij}=2E_{(i}{}^aE_{j)}{}^BV^CT_{CBa}.
\end{align}
$$

The $\kappa$ variation of the dilaton is determined purely in terms of the $\kappa$-variation of $Z$: $\delta&#95;\kappa \Phi=\delta&#95;\kappa Z^M \partial&#95;M \Phi$.

The $\kappa$ variation of the DBI part of the action can be written as

$$
\begin{align}
S_{DBI}&=-T_P\int d^{p+1}\zeta e^{-\Phi}\sqrt{-\det M}\\
\delta_\kappa S_{DBI}&=T_P\int d^{p+1}\zeta e^{-\Phi}\sqrt{-\det M}\left[\delta_\kappa\Phi -\frac{1}{2} \operatorname{Tr} (M^{-1}\delta_\kappa M)\right]\\
&=T_P\int d^{p+1}\zeta V^\alpha \mathcal{A}_\alpha,
\end{align}
$$

where

$$
\begin{align}
\mathcal{A}_\alpha&=e^{-\Phi}\sqrt{-\det M}[D_\alpha \Phi-\frac{1}{2}(M^{-1})^{ij}(2E_{(i}{}^aE_{j)}{}^BT_{\bar{\alpha} B a}+E_i{}^B E_j{}^C H_{CB\bar{\alpha}})],\\
D_{\bar{\alpha}} \Phi&=E_{\bar{\alpha}}^M \partial_M \Phi
\end{align}
$$

Meanwhile, the variation of the WZ term can be written as

$$
\begin{align}
\delta_\kappa S_{WZ}&=\mu_p \int P[\mathcal{L}_{K_\kappa}C]\wedge e^{\mathcal{F}}+P[C]\wedge e^{\mathcal{F}}\wedge P[i_\kappa H_3]\\
&=\mu_p \int P[i_\kappa dC]\wedge e^{\mathcal{F}}+dP[i_\kappa C]\wedge e^{\mathcal{F}}+P[C]\wedge e^{\mathcal{F}}\wedge P[i_\kappa H_3]\\
&=\mu_p \int P[i_\kappa R]\wedge e^{\mathcal{F}}+\mu_p\int d[P[i_\kappa C]\wedge e^{\mathcal{F}}],\\
&=\mu_p \int P[i_\kappa R]\wedge e^{\mathcal{F}}\\
R&=dC+H_3\wedge C
\end{align}
$$

It should be reminded that $C$ is actually a polyform, so the equalities above are actually a bit trickier than it might seem.

For example, one has on a homogenous component of $C$, $C&#95;n$,

$$
\begin{align}
d(P[i_\kappa C_n]\wedge e^{\mathcal{F}})&=dP[\iota_\kappa C_n]\wedge e^{\mathcal{F}}+(-1)^{n-1}P[\iota_\kappa C_n]\wedge  d(e^{\mathcal{F}})\\
&=dP[\iota_\kappa C_n]\wedge e^{\mathcal{F}}+(-1)^{n-1}P[\iota_\kappa C_n]\wedge P[H_3]\wedge e^{\mathcal{F}}\\
&=(dP[\iota_\kappa C_n]+H_3\wedge P[\iota_\kappa C_n])\wedge e^{\mathcal{F}}
\end{align}
$$

In terms of the homogenous components of $C$, the variation of the action is

$$
\begin{align}
\delta_\kappa S_{WZ}&=\mu_p\sum_{r\geq 0}\frac{1}{r!}(P[\iota_\kappa R_{p+2-2r}\wedge \mathcal{F}^r])_{p+1}.
\end{align}
$$

The homogenous part of $R$ can be written in components as 

$$
\begin{align}
R_n&=\frac{1}{n!}E^{A_1}\wedge...\wedge E^{A_n}R_{A_1...A_n},
\end{align}
$$

such that

$$
\begin{align}
P[\iota_\kappa R_n]&=\frac{1}{(n-1)!}d\zeta^{i_1}\wedge...\wedge d\zeta^{i_{n-1}}V^AE_{i_1}{}^{A_1}...E_{i_{n-1}}{}^{A_{n-1}}R_{AA_1...A_{n-1}}.
\end{align}
$$

Defining

$$
\begin{align}
W_\alpha&=\sum_{r\geq 0}\frac{1}{r! 2^r(p+1-2r)!}\epsilon^{i_1...i_{p+1}}E_{i_1}{}^{A_1}...E_{i_{p+1-2r}}{}^{A_{p+1-2r}}R_{\alpha A_1...A_{p+1-2r}}\mathcal{F}_{i_{p+2-2r}i_{p+3-2r}}...\mathcal{F}_{i_p i_{p+1}},
\end{align}
$$

the variation of $S&#95;{WZ}$ is

$$
\begin{align}
\delta_\kappa S_{WZ}&=\mu_p \int d^{p+1}\zeta V^\alpha W_\alpha.
\end{align}
$$

Comparing the two forms of $S&#95;{DBI},S&#95;{WZ}$, it would be quite nice if $W&#95;\alpha$ is proportional to $A&#95;\alpha$.

Indeed this is the case, although it is somewhat difficult to prove. The answer turns out to be that 

$$
\begin{align}
W_\alpha&=\Upsilon A_\alpha\\
\Upsilon&=\frac{*P_{p+1}}{\sqrt{-\det (g+\mathcal{F})}},\\
\sum_{\text{odd $p$}}P_{p+1}&= e^{\mathcal{F}}\sum_{n\geq 0}\frac{1}{(2n)!}\sigma_3^{n+1}\sigma_1(\hat{E}^a \Gamma_a)^{2n}
\end{align}
$$

(note that this only holds in the type IIB case, but that is what we're working with anyways). Let us discuss a few, but not all, of the steps that go into the proof that $W&#95;\alpha = \Upsilon A&#95;\alpha$ in the constraints of type IIB superspace.

In component notation, one has that

$$
\begin{align}
(P_{p+1})_{i_1...i_{p+1}}&=\sum_{q=0}^{m=\frac{p+1}{2}}\frac{(p+1)!}{2^qq!(p+1-2q)!}\mathcal{F}_{[i_1i_2}...\mathcal{F}_{i_{2q-1}i_{2q}}\gamma_{i_{2q+1}}...\gamma_{i_{p+1}]}\sigma_3^{m-q+1}\sigma_1,
\end{align}
$$

where

$$
\begin{align}
\gamma_i&\equiv\hat{E}_i{}^a \Gamma_a.
\end{align}
$$

The algebra can now be carried out as

$$
\begin{align}
\Upsilon A_\alpha&=\frac{1}{\sqrt{-\det M}}\epsilon^{i_1i_2...i_{p+1}}\sum_{q=0}^{m=\frac{p+1}{2}}\frac{1}{2^qq!(p+1-2q)!}\mathcal{F}_{[i_1i_2}...\mathcal{F}_{i_{2q-1}i_{2q}}\gamma_{i_{2q+1}}...\gamma_{i_{p+1}]}\sigma_3^{m-q+1}\sigma_1\\
&\times e^{-\Phi}\sqrt{-\det M}[D_{\bar{\alpha}} \Phi-\frac{1}{2}(M^{-1})^{ij}(2E_{(i}{}^aE_{j)}{}^BT_{\bar{\alpha} B a}+E_i{}^B E_j{}^C H_{CB\bar{\alpha}})]
\end{align}
$$

as a reminder,

$$
\begin{align}
W_\alpha&=\sum_{r\geq 0}\frac{1}{r! 2^r(p+1-2r)!}\epsilon^{i_1...i_{p+1}}E_{i_1}{}^{A_1}...E_{i_{p+1-2r}}{}^{A_{p+1-2r}}R_{\alpha A_1...A_{p+1-2r}}\mathcal{F}_{i_{p+2-2r}i_{p+3-2r}}...\mathcal{F}_{i_p i_{p+1}},
\end{align}
$$

It is clear from the form of $\Upsilon A&#95;\alpha$ how to get all factors except for $R$. In fact, one has that

$$
\begin{align}
R_{\bar{\alpha}a_1...a_{2n}}&=-(n-2) e^{-\Phi}(\Gamma_{a_1...a_{2n}}\sigma_3^n (i\sigma_2) \Lambda).
\end{align}
$$

This is somewhat difficult to prove (I will not do so fully), but can be at least verify it recursively via the Bianchi-like identity on $R$ of the form

$$
\begin{align}
dR_{2n+1}-R_{2n-1}\wedge H_3=0.
\end{align}
$$

There are three components on the right hand side. For the first, with $D&#95;\alpha \Phi$, with $n=m-q$, and noting that $\sigma&#95;1=\sigma&#95;3 (i\sigma&#95;2)$, one can write $\sigma&#95;3^{n+1}\sigma&#95;1=\sigma&#95;3^n (i\sigma&#95;2)$. Therefore, this has the correct form to the contribute to $W&#95;\alpha$. Because $\Lambda$ is $\frac{1}{2}$ of $D&#95;\alpha \Phi,$ this contributes a coefficient of $2$, partially recovering the $-n+2$ coefficient of $R$. The other contributions are trickier and I will not consider here. The details of the computation, in Einstein frame, are in arXiv:9611159, or in the much simpler flat-space case, equations 14.46-14.48 of the string notes.

In sum, the variation of the total action is written as

$$
\begin{align}
\delta_\kappa S&=T_P\int d^{p+1}\zeta  V^\alpha ([1+\Upsilon]\mathcal{A})_\alpha\\
&=T_P\int d^{p+1}\zeta \kappa(1-\Upsilon)(1+\Upsilon)\mathcal{A}\\
&=0.
\end{align}
$$

Overall, there are a few takeaways from this derivation. First, in general $\kappa$-symmetry is a highly non-trivial structure. It is surprising we can analyze it in the complications of type II superspace. Second of all, the critical object of study that emerged from the analysis is $\Upsilon$. If one can determine the form of $\Upsilon$ for a given theory, and assuming $\theta=0$, then one can determine which supersymmetries are preserved, by finding the condition for spinors $\epsilon$ under which

$$
\begin{align}
&\iota_\epsilon E^\alpha +\iota_\kappa E^\alpha=0=\epsilon+\kappa(1-\Upsilon).
\end{align}
$$

So a spinor $\epsilon$ is preserved by the Dp-brane configuration if it obeys the condition $\epsilon(1+\Upsilon)=0, \epsilon \Upsilon=-\epsilon$.

### $\kappa$-symmetry of the wrapped D5-brane system
{: #sec-continued }

First of all, with the two-form on the resolved curve being given by $\omega&#95;C$, with $\int&#95;C \omega&#95;C=1$, the Kahler form can be written as $J=(2\pi)^2 \alpha' j\omega&#95;C$, with 

$$
\begin{align}
j\equiv \frac{1}{(2\pi)^2 \alpha'}\int_C J.
\end{align}
$$

Then, taking a local orthonormal frame adapted to the holomorphic cycle, the Kahler form on the cycle is $e^4\wedge e^5$. Both the $B$ and $F$ field take the form $a e^4 \wedge e^5$ on the wrapped cycle, such that one can consider the overall $\mathcal{F}$ of the form

$$
\begin{align}
\mathcal{F}=\frac{b_i}{j}e^4\wedge e^5,
\end{align}
$$

where $j$ is the area of the wrapped cycle. We will want to take $j\to 0$.

Consider $e^0,e^1,e^2,e^3$ to denote the directions along $\mathbb{R}^{1,3}$ while $e^4,e^5$ represent directions along the wrapped cycle $C$. For the case of a classical D5-brane configuration, one has $\theta=0$, such that $\hat{E}^a$ is the ordinary pullback of the spacetime Vielbein. In particular, this means that $\hat{E}^a=e^a$. $P&#95;6$ has two contributions:

$$
\begin{align}
P_6&=\frac{1}{6!}(\hat{E}^a \Gamma_a)^6 \sigma_3^4 \sigma_1+\mathcal{F}\wedge \frac{1}{4!}(\hat{E}^a \Gamma_a)^4 \sigma_3^3 \sigma_1\\
&=e^0\wedge e^1 \wedge...\wedge e^5 \Gamma_{012345}\sigma_1+f e^0\wedge e^1\wedge...\wedge e^5 \Gamma_{0123}i\sigma_2,
\end{align}
$$

where $\mathcal{F}=f e^4 \wedge e^5$.

The $\kappa$-symmetry matrix $\Upsilon$ then takes the form

$$
\begin{align}
\Upsilon&=s\frac{*P_6}{\sqrt{-\det (g+\mathcal{F})}}\\
&=\frac{s}{\sqrt{1+f^2}}(\Gamma_{012345}\sigma_1+f\Gamma_{0123}i\sigma_2),
\end{align}
$$

where $s$ is either plus or minus one depending on if one is considering a D5-brane or anti-D5-brane, respectively (this was not transparent in the previous section as we simply dropped the overall sign).

Just to double check that everything is on track, we can verify that indeed $\Upsilon^2=1$ since $(\Gamma&#95;{012345}\sigma&#95;1)^2=1$, $(\Gamma&#95;{0123}i\sigma&#95;2)^2=1$, and the cross-terms vanish. The preserved supersymmetries are of the form $\epsilon\Upsilon =-\epsilon$. In our situation, $b&#95;i,j$ defined as above, one has $f=\frac{b&#95;i}{j}$, such that

$$
\begin{align}
\Upsilon&=\frac{s}{\sqrt{j^2+b_i^2}}(j\Gamma_{012345}\sigma_1+b_i\Gamma_{0123}i\sigma_2).
\end{align}
$$

Now, for the specific choice of D5-brane and anti-D5-brane to give the correct effective charge on the D3-brane, one has that $b&#95;i=b$ for the D5-brane, while $b&#95;i=b-1$ for the anti-D5-brane, so the two $\Upsilon&#95;i$ take the form

$$
\begin{align}
\Upsilon_1&=\frac{1}{\sqrt{j^2+(b)^2}}(j\Gamma_{012345}\sigma_1+(b)\Gamma_{0123}i\sigma_2)\\
\Upsilon_2&=-\frac{1}{\sqrt{j^2+(b-1)^2}}(j\Gamma_{012345}\sigma_1+(b-1)\Gamma_{0123}i\sigma_2)
\end{align}
$$

Viewing the two $\Upsilon$ as matrices, they then have different eigenvectors, which means they preserve different combinations of supercharges. However, as the area of the resoled cycle goes to zero, $j\to 0$, such that both $\Upsilon&#95;i$ take the form

$$
\begin{align}
\epsilon \Gamma_{0123}i\sigma_2=-\epsilon.
\end{align}
$$
 
Therefore, as $j\to 0$, the same supersymmetries are preserved by both brane configurations, so they are mutually BPS in this limit.

## The holographic limit
Now we take the standard holographic limit of $\ell&#95;s E,(g&#95;BN)^{\frac{1}{4}}\ell&#95;s E\ll 1$ such that the massive open strings, as well as massive/massless closed strings in the asymptotically flat region, decouple from the brane dynamics. Energy here, is as usual measured with respect to the asymptotically flat time coordinate, such that redshifted particles can still have large energy in the near-horizon limit.

Walking through the order of logic taken in the case of $AdS&#95;5\times S^5$, the argument of the black 3-brane solution in the near-horizon limit basically holds, with a replacement of $S^5$ with $T^{1,1}$. This is because in the construction of the black 3-brane solution, we assumed the brane preserved the isometries of the space in the radial directions times an overall $S^5$ (i.e. $dr^2+r^2 d^2&#95;{S^5}$. This $S^5$ is not too essential from the most important analysis in the AdS/CFT dictionary, besides the requirement that the cone $dr^2+r^2 ds^5$ is Ricci flat. Here, we simply replace $S^5$ by $T^{1,1}$.

To recap the most essential parts of the argument, we are assuming that placing $N$ D3-branes at the tip of the conifold preserves the isometries of $T^{1,1}$, with $N$-units of $F&#95;5$ flux, one for each of the D3-branes. 

The ansatz for the black 3-brane backreacted metric is
 
$$
\begin{align}
&ds^2
=
H(r)^{-1/2}\eta_{\mu\nu}dx^\mu dx^\nu
+
H(r)^{1/2}\left(dr^2+r^2ds^2_{T^{1,1}}\right),
\qquad
H(r)=1+\frac{R^4}{r^4}\\
F_5&=(1+*)dH^{-1}\wedge dx^0 \wedge dx^1 \wedge dx^2\wedge dx^3
 \end{align}
$$

The only assumption made in the black 3-brane analysis was that the transverse space $Y&#95;6$ was Ricci flat. Indeed, the conifold is.
 
In the near-horizon, where one can consider $H(r)$ to be replaced by $\frac{R^4}{r^4}$, the metric becomes
 
$$
\begin{align}
ds^2&=\frac{r^2}{R^2} \sum_{m=0}^3 dx^m dx_m+\frac{R^2}{r^2}(dr^2+r^2 ds_{T^{1,1}}^2),
 \end{align}
$$

 with radius given by
 
$$
\begin{align}
R^4&=4\pi g_B N(\alpha')^2\frac{\pi^3}{\text{vol} (T^{1,1})}\\
\text{vol}(T^{1,1})&=\frac{16}{27}\pi^3.
 \end{align}
$$

 
Often, it will be useful to work in the semiclassical supergravity regime, where one assumes $g&#95;s\ll 1,N\gg 1, g&#95;s N\gg 1$.
 
The reason we wrote out the whole story of a D3-brane at the conifold singularity being given by a wrapped D5-brane is that it gives us intuition why we should expect the gauge group to a priori be $U(N)\times U(N)$ instead of just one $U(N)$ factor: the D3-brane is viewed as a bound state of two fractional D3-brane, each of which separately carries $U(N)$ chan-paton factors. Now, open strings stretching between the two stacks of D5- and anti-D5-branes will become bi-fundamental matter fields under the $U(N)\times U(N)$ gauge group. Open strings stretched between the same type of brane along the worldvolume will give vector multiplets. We might also expect there to be adjoint matter fields corresponding to an open string stretching between two fractional branes and not a fractional brane and a fractional anti-brane, along the transverse direction. We will understand soon why this cannot be the case (an intuition is that adjoint matter vacuum expectation value would represent moving the branes in a transverse direction $\mathbb{R}$, but no such transverse direction exists on the conifold).

There is something to be said about the $U(N)\times U(N)$ gauge symmetry. It was originally posited to be $U(N)\times U(N)$, and under the standard arguments, the diagonal $U(1)$ of the two gauge groups will completely decouple. However, the off-diagonal $U(1)$ will not. In fact, we will see that the off-diagonal $U(1)$ is actually best viewed as a global symmetry in the boundary theory, not a gauge symmetry.
 

## The dual gauge theory

### Fundamentals of the UV Lagrangian
 First recall the basics of $\mathcal{N}=1$ field theories via the superspace formalism, which will not be reviewed here, but suffice to say that the same conventions are being taken as in the string notes (hopefully). There are a lot of simplifications over $\mathcal{N}=4$ theories, particularly when dealing with BPS states.

A chiral superfield is defined to obey $\bar{\mathbb{D}}^{\dot{\alpha}}\Phi=0$ ($\bar{\mathbb{D}}$ anticommutes with $\mathbb{Q},\bar{\mathbb{Q}}$), implying that it only depends on the coordinates $y^\mu=x^\mu+i\theta \sigma^\mu\bar{\theta}$. The chiral superfield contains a boson, spinor field, as well as an auxillary field, packaged together as

$$
\begin{align}
\Phi(y,\theta)&=\phi(y)+\sqrt{2}\theta^\alpha \psi_\alpha(y)+\theta^2 F(y)
\end{align}
$$

The lowest component of the chiral superfield, $\Phi\big&#124;&#95;{\theta=\bar{\theta}=0}=\phi$, obeys $\bar{Q}^{\dot{\alpha}}\mathcal{O}=0$.

Besides chiral superfields, one can have non-abelian vector superfields $V=V&#95;a(x,\theta,\bar{\theta})t^a$, which transforms under a gauge transformation as

$$
\begin{align}
\exp(V')&=\exp(-i\bar{\Lambda})\exp(V)\exp(i\Lambda)\\
Q'&=\exp(-i\Lambda_a t^a_R)Q,
\end{align}
$$

where in our case for $Q$ transforming in the fundamental representation $t^a&#95;R=t^a$.

One can define a superspace field strength as

$$
\begin{align}
W_\alpha&=-\frac{1}{4}\bar{\mathbb{D}}^2(\exp(-V)\mathbb{D}_\alpha \exp(V))
\end{align}
$$

For each gauge group, one has the gauge potential term

$$
\begin{align}
\int d^4 x \left[\int d^2 \theta \tau W^\alpha W_\alpha -\int d^2\bar{\theta} \bar{\tau} \bar{W}^{\dot{\alpha}}\bar{W}_{\dot{\alpha}}\right],
\end{align}
$$

with $\tau=\frac{\theta}{2\pi}+\frac{4\pi i }{g&#95;{YM}^2}$. There is also a chiral superfield kinetic term of the form

$$
\begin{align}
\int d^4\theta \bar{Q} \exp(V_a t^a)Q,
\end{align}
$$

with color indices suppressed as usual. In the notation of the string book, the "bar" represents complex conjugation, in the sense of 

$$
\begin{align}
\bar{\Phi}(\bar{y},\bar{\theta})&=(\Phi(y,\theta))^*,
\end{align}
$$

where $(\theta^\alpha)^*\equiv \bar{\theta}&#95;{\dot{\alpha}}$.

Besides specifying the gauge groups, we need to specify the superpotential, which is an F-term. In general, an $F$-term for bi-fundamental matter fields takes the form

$$
\begin{align}
\int d^2\theta F(A_i,B_j),
\end{align}
$$

for the four chiral superfields $A&#95;i,B&#95;j$, with $i,j=1,2$. $A&#95;i, B&#95;j$, in the so-called klebanov-witten theory which we are specifically studying, live in flavor doublets, rotating in the fundamental representation under separate $SU(2)\times SU(2)$ flavor symmetries.

 
We claim, and will see strong evidence for the fact, that the dual gauge theory is a $\mathcal{N}=1, SU(N)\times SU(N)$ theory with superpotential

$$
\begin{align}
W(A,B)&=2\lambda\operatorname{Tr} (A_1 B_1 A_2B_2-A_1 B_2A_2 B_1)\\
&=\lambda \epsilon^{ij}\epsilon^{kl}\operatorname{Tr}(A_i B_k A_j B_l),
\end{align}
$$

where $(A&#95;i)&#95;{a}^{\bar{b}}$, with $a$ an index in the fundamental representation of the first $SU(N)$, and $\bar{b}$ an index in the antifundamental representation of the second $SU(N)$.

Explicitly, the chiral matter fields will have D-terms of the form

$$
\begin{align}
\int d^4\theta \operatorname{Tr} (A_i^\dagger e^{V_1}A_i e^{-V_2 }+B_i^\dagger e^{V_2}B_i e^{-V_1})
\end{align}
$$

Here, I represent a $\dagger$ on $A&#95;i$ to note that not only are we taking the complex conjugate, but we are reversing the order of the bifundamental indices, in the sense of normal Hermitian conjugation: $(A&#95;i^\dagger)^{\bar{b}}{}&#95;{a}=\left((A&#95;i)^a{}&#95;{\bar{b}}\right)^*$.

### Flowing to the conformal fixed point

It is worth noting that, unlike the $\mathcal{N}=4$ SYM, the UV presentation of the Lagrangian is not automatically a conformal theory. Instead, we have non-trivial $\beta$-functions and will flow to a non-trivial conformal fixed point. Let us now analyze those $\beta$-functions.

#### $\mathcal{N}=1$ superconformal theory generalities

Before discussing the conformal fixed point, it is actually worth discussing some aspects of $\mathcal{N}=1$ superconformal theories. Since we are dealing with a UV Lagrangian description, we have to be careful with what we can say. Statements can be made precise in the discussion of the $\bar{Q}$-cohomology:

$$
\begin{align}
\mathcal{R}_{\text{chiral}}&=\frac{\{\mathcal{O}: \bar{Q}_{\dot{\alpha}}\mathcal{O}=0\}}{\{\mathcal{O}=\bar{Q}\mathcal{X}\}}.
\end{align}
$$

The key use of the $\bar{Q}$-cohomology is that each chiral ring cohomology element corresponds to a superconformal primary, which transforms in the same representation under the global symmetries of the theory as the chiral ring element. 

Using the SCFT algebra, with $Q&#95;\alpha^\dagger=S^\alpha,\bar{Q}&#95;{\dot{\alpha}}^\dagger=\bar{S}^{\dot{\alpha}}$, one has the commutation relation on scalars (where the lorentz generator vanishes),

$$
\begin{align}
\{\bar{S}^{\dot{\alpha}},\bar{Q}_{\dot{\beta}}\}&=2\delta^{\dot{\alpha}}_{\dot{\beta}}\left(D-\frac{3}{2}R\right)
\end{align}
$$

For a general chiral superfield $\mathcal{O}$, consider 

$$
\begin{align}
H_{\bar{Q}}&\equiv \sum_{\dot{\alpha}}\{\bar{S}^{\dot{\alpha}},\bar{Q}_{\dot{\alpha}}\}\\
&\big\langle \mathcal{O}\big|H_{\bar{Q}}\big|\mathcal{O}\big\rangle=\sum_{\dot{\alpha}}(|\bar{Q}_{\dot{\alpha}}|\mathcal{O}\rangle|^2+|\bar{S}^{\dot{\alpha}}|\mathcal{O}\rangle|^2)\geq 0
\end{align}
$$

For a chiral superfield, $\bar{Q}$ annihilates $\mathcal{O}$, and for a superconformal primary, $\bar{S}^{\dot{\alpha}}$ annihilates $\mathcal{O}$, implying that $\Delta=\frac{3}{2}R&#95;{\mathcal{O}}$ for a chiral superfield that is also a superconformal primary (a similar statement can be made about anti-chiral superconformal primaries).

Consider instead a general chiral superfield. Denote the projection onto the kernel of $H&#95;{\bar{Q}}$ as $P&#95;0$. On the orthogonal complement to the kernel, the operator $H&#95;{\bar{Q}}$ is invertible. Therefore, decomposing a general chiral superfield as

$$
\begin{align}
|\mathcal{O}\rangle&=P_0|\mathcal{O}\rangle+(1-P_0)|\mathcal{O}\rangle,
\end{align}
$$

one has that

$$
\begin{align}
(1-P_0)|\mathcal{O}\rangle&=\sum_{\dot{\alpha}}\bar{Q}_{\dot{\alpha}}\bar{S}^{\dot{\alpha}}H_{\bar{Q}}^{-1}(1-P_0)|\mathcal{O}\rangle,
\end{align}
$$

implying that $\mathcal{O}$ is in the same homology class as $P&#95;0 \mathcal{O}$. Moreover, by definition, $\bar{S}^{\dot{\alpha}}P&#95;0 \mathcal{O}=0$, so $P&#95;0 \mathcal{O}$ is a chiral superconformal primary.

A primary is by definition annihilated by $\bar{S}^{\dot{\alpha}}$, while the lowest component of a chiral superfield is annihlated by $\bar{Q}&#95;{\dot{\beta}}$.

Therefore, when discussing a UV operator, and claiming that it is a superconformal primary, we really mean *the superconformal primary lying in its $\bar{Q}$-cohomology class at the conformal fixed point*.

#### The actual fixed point

The Wilsonian effectivse action of the $\mathcal{N}=1$ theory would generically be expected to take the form

$$
\begin{align}
&\int d^4 x\bigg\{\frac{1}{4\pi}\operatorname{Im}\sum_{i=1}^2 \left[\int d^2\theta \tau_i(\mu)\operatorname{Tr}(W_i^\alpha W_{i,\alpha})\right]+\int d^4 \theta \sum_i Z_{A,B}^{-1}(\mu)\left( \operatorname{Tr} A_i^\dagger e^{V_1} A_i e^{-V_2}+B_i^\dagger e^{V_2}B_i e^{-V_1}\right)\bigg\}\\
&+\lambda\int d^2\theta\; \epsilon^{ij}\epsilon^{kl}\operatorname{Tr} (A_iB_k A_j B_l)+...
\end{align}
$$

(the field renormalization of all $A,B$ fields must be the same due to the flavor and $\mathbb{Z}&#95;2$ exchange symmetry present) Generically, the $...$ hides an infinite number of higher derivative terms, meaning that it is not so useful to write an explicit Lagrangian for the conformal fixed point. This is true for the D-terms, which are in general corrected by both perturbative and non-perturbative terms. A remarkable non-renormalization theorem for $\mathcal{N}=1$ supersymmetric theories states that there are no perturbative corrections to the superpotential (i.e. polynomial in the fields). 

In general, one can have non-perturbative corrections. As far as I'm aware, the discussion of this is somewhat involved. In fact, I'm not aware of a proof for the Klebanov-Witten case. (Perhaps an analogous statement can be made by comparing to $\mathcal{N}=1$ QCD with one gauge group. In such a situation, for $N&#95;f\geq N$, there are no non-perturbative corrections (see e.g. equation M.37 of the string notes). For the Klebanov-Witten theory, from the perspective of each gauge group, one has $N&#95;f=2N$. Therefore, a non-perturbative correction might be epxected to be forbidden and the superpotential to be exact. Without being more familiar about the details of the argument for $\mathcal{N}=1$ QCD, I can't tell if this holds for the Klebanov-Witten theory though.)

Practically, this implies that the anomalous dimension of the operator $\operatorname{Tr} A&#95;i B&#95;j$ is determined purely in terms of the anomalous dimension of the fields $A,B$, where the anomalous dimenmsion is defined as

$$
\begin{align}
\gamma_i&\equiv \frac{1}{2}\frac{d}{d\log \mu}\log Z_i(\mu).
\end{align}
$$
 
A similar argument can be applied to all chiral superfields. For example, if we deform the action by $\int d^4x\;d^2 \theta\;\operatorname{Tr}(A&#95;{i} B&#95;{j})$, such a term will receive no perturbative corrections in the Wilsonian effective action. Consequently, such an operator receives no additional vertex corrections and $\gamma&#95;{\operatorname{Tr}&#95;{A&#95;iB&#95;j}}=\gamma&#95;{A}+\gamma&#95;B=2\gamma&#95;A$ (due to $SU(2)$ flavor symmetry and $\mathbb{Z}&#95;2$ exhange symmetry, the anomalous dimension of all $A,B$ are the same). I should add that the argument is slick here and will only work for superconformal primaries. The reason is that D-terms can be trivially written as F-terms as

$$
\begin{align}
\int d^4 x d^4\theta X&=-\frac{1}{4}\int d^4 x d^2 \theta \bar{D}^2 X.
\end{align}
$$

Such "trivial F-terms" do not obey the non-renormalization theorem, and so we cannot make statements about their anomalous dimensions. There is a connection to be made here to the chiral primaries, represented in the chiral ring, but we will need to study the vacua of the theory to make this statement, so we won't do so until then. For now, it suffices to say that F-term deformations that are genuine F-terms are those operators which correspond to non-trivial chiral ring elements. As we will later see, $\operatorname{Tr} A&#95;i B&#95;j$ is such an element.

An additional useful piece of information is that the $\beta$-function for $\tau(\mu)$ in the holomorphic scheme defined above is one-loop exact. One can rescale the gauge and matter field terms such that the kinetic terms of the gauge field have no coupling dependence (as is usual in perturbative computations), as well as the kinetic term for $Q&#95;i$ having no $Z$ dependence. That is, one rescales to "canonical normalization" of $V^{(c)}=(g&#95;c(\mu))^{-1}V,Q&#95;i^{(c)}=(Z&#95;i(\mu))^{-\frac{1}{2}}Q&#95;i$. 

The resulting NSVZ beta-function, which I will not cover the computation of, has the form in the canonical normalization scheme of

$$
\begin{align}
\frac{d}{d\log \mu}\frac{2\pi}{g_c^2}&=\frac{1}{2\pi}\frac{3N-\sum_i t_2(R_i)(1-2\gamma_i)}{1-\frac{N}{4\pi^2}g_c^2},
\end{align}
$$

where $t&#95;2(R)$ is the dynkin index of the representation $R$, with the dynkin index of the fundamental representation being given by $\frac{1}{2}$, and $\gamma&#95;i$ is the anomalous dimension of the four fields $A&#95;i,B&#95;i$.

This is the exact $\beta$-function in the NSVZ scheme. Now, for the case of the Klebanov-Witten theory, because the fields transform in the bifundamental representation, they take indices in both representations. Therefore from the perspective of one representation, the beta function takes the form, with an additional factor of $N$,

$$
\begin{align}
\frac{d}{d\log \mu}\frac{2\pi}{g_c^2}&=\frac{1}{2\pi}\frac{3N-2N (1-\gamma_{AB})}{1-\frac{N}{4\pi^2}g_c^2}
\end{align}
$$

where $\gamma&#95;{AB}=\gamma&#95;A+\gamma&#95;B$, which in a more gauge invariant way can be characterized as the anomalous dimension, for any $i,j$, of $\mathcal{O}=\operatorname{Tr} (A&#95;i B&#95;j)$ (here, $A,B$ represent the lowest-dimension fields, i.e the bosonic fields, of the chiral superfield).

A one-loop calculation at $\lambda=0$ in standard perturbation theory determines

$$
\begin{align}
\gamma_{AB}&=-\frac{(g^{(c)})^{2}+(\tilde{g}^{(c)})^2}{4\pi^2}\frac{N^2-1}{N}
\end{align}
$$

One can see that a fixed point could exist at $\gamma&#95;{AB}=-\frac{1}{2}$, presuming such an anomalous dimension can be reached in the strong coupling limit. The one-loop calculation tells us that at least, the $\beta$-function is flowing in the right direction towards such a fixed point. We will presume that indeed such a fixed point exists, which seems to actually be the case.

A consistency condition is the following: presuming the existence of the fixed point, using the relation between R-charge and $\Delta$ for the chiral primary of the chiral ring element $\operatorname{Tr}(A&#95;i B&#95;j)$, the anomalous dimension at the conformal fixed point for $\operatorname{Tr}(A&#95;i B&#95;j)$ is $-\frac{1}{2}$, as desired. One should also note that at the conformal fixed point, the superpotential is a marginal deformation, as the lowest-weight term of the superpotential has weight $\Delta=\frac{3}{2}R=3$, while $d^2\theta$ has weight $1$. Likewise, the gauge kinetic term can also be determined to be marginal, by the exact same analysis ($\mathcal{W}^\alpha \mathcal{W}&#95;{\alpha}$ functions as a chiral superfield).

One can make the identification of R-charge away from the conformal fixed point. Although the superconformal relation between $R,\Delta$ only holds at the SCFT, away from the conformal fixed point, we have a symmetry that acts as $A&#95;i\to e^{i\frac{\varphi}{2}}A&#95;i,B&#95;i\to e^{i\frac{\varphi}{2}}B&#95;i,\theta^\alpha \to e^{i\varphi}\theta^\alpha$. Such a symmetry is identified as the R-symmetry away from the conformal fixed point, such that the scaling dimension of the chiral primaries can be identified directly from the UV operator representative (in addition to the non-renormalization argument given above which tells us that the chiral primaries have scaling dimension given by the sum of the scaling dimensions of its elementary constituents $A,B$).

### The moduli of the theory

We should also find the precise moduli of the theory. Actually, when inspecting the involvement of $\tau$, it is best to work in the holomorphic scheme, which is where the $\beta$-function for $\tau$ is one-loop exact.

One can derive the relation

$$
\begin{align}
\tau_c(\mu)&=\tau(\mu)-i\frac{N}{\pi}\log g_c(\mu)+i\sum_i \frac{C(R_i)}{2\pi}\log Z_i(\mu).
\end{align}
$$

Differentiating this and using that $\theta$ is non-dynamical, the $\beta$-function for $\tau$ becomes

$$
\begin{align}
\frac{d\tau}{d\log \mu}&=\frac{iN}{2\pi},
\end{align}
$$

which demonstrates that 

$$
\begin{align}
\Lambda&=\mu e^{\frac{2\pi i}{N}\tau(\mu)},\;\tilde{\Lambda}=\mu e^{\frac{2\pi i}{N}\tilde{\tau}(\mu)}
\end{align}
$$

are dynamical scales independent of $\mu$, and therefore part of the data parameterizing the RG fixed point. Both $\Lambda$, as well as $\lambda$, the coupling of the superpotential, are dimensionful. 

 Under the field redefinition $A&#95;i \to e^{i\alpha} A&#95;i,B&#95;i \to e^{i\alpha}B&#95;i, \lambda\to e^{-4i\alpha}\lambda$ (this is different from an R-symmetry, because we are rotating $\lambda$ and not $\theta$ and so this is a field redefinition), the marginal superpotential is invariant while the $\theta$-angles shift by $\theta\mapsto \theta+4\alpha N,\tilde{\theta}\to \tilde{\theta}+4\alpha N$ due to the axial anomaly in the measure. I say "axial anomaly" not to imply that this is an axial symmetry transformation, but rather that the shift in the $\theta$ angles comes from the same non-invariance of the measure as one usually has when analyzing the axial anomaly in, for example, QCD (since the chiral superfields contain Weyl fermions). Under such a shift, the products

$$
\begin{align}
u&=\lambda \Lambda,\tilde{u}=\lambda \tilde{\Lambda}
\end{align}
$$

are invariant. This suggests that they are a good parameterization of the conformal manifold of the theory at the fixed point. To say another way: $u,\tilde{u}$ parameterize inequivalent IR fixed points. This implies that although the superpotential is a marginal operator, it is not an exactly marginal operator in the sense that tuning $\lambda$ without tuning other parameters simultaneously moves one along the conformal manifold. Rather, some unknown combination of the superpotential and the gauge kinetic term is the genuine exactly marginal operator of the theory.

This lines up with the gravity side of things. Moduli are constant values of fields that we can change. Normally, we would just have the constant axio-dilaton parameter $\tau&#95;{IIB}$ as the modulus. However, $T^{1,1}$ has a non-trivial $S^2$. There, one can consider $B&#95;2=b(x)\omega&#95;2(y)$ for the dual 2-form $\omega&#95;2(y)$, and similarly $C&#95;2=c(x)\omega&#95;2(y)$. Taking $b, c$ to be constant gives the additional moduli

$$
\begin{align}
\tau_{IIB}\\
\frac{1}{2\pi \alpha' g_B}\int_{S^2 }C_2\\
\frac{1}{2\pi \alpha'}\int_{S^2}B_2.
\end{align}
$$

These are 4 real moduli, at least matching the dimension of the 2 complex moduli of the gauge field.

Finally, let us match the global symmetries of the gauge theory to isometries of the dual gravitational theory, when this is possible. First of all, there is an overall $SU(2)\times SU(2)$ symmetry, rotating the individual $A$ and $B$ flavor multiplets. There is also a $U(1)&#95;R$ symmetry that in superspace rotates

$$
\begin{align}
A\to e^{i\frac{\varphi}{2}} A, B\to e^{i\frac{\varphi}{2}}B,\theta^\alpha\to e^{i\varphi}\theta^\alpha,
\end{align}
$$

(this also reduces to the transformation on the lowest component of the superfield).

There is also a $U(1)&#95;B$ global symmetry generated by $A\to e^{i\alpha}A,B\to e^{-i\alpha}B$. One can use usual computations to show that all these symmetries are non-anomalous.

Actually, there is an overall $\mathbb{Z}&#95;2$ identification, under which all states are invariant. Such an identification is given by $(-1&#95;A,-1&#95;B,e^{i\pi})$, with the first two the $SU(2)$ factors, and the third the baryon symmetry.

Finally, there is an overall $\mathbb{Z}&#95;2$ symmetry swapping $A,B$, as well as the corresponding gauge groups.

The easiest way to see these isometries will be from observing the vacua of the klebanov witten theory, which will make the conifold structure manifest.

## The mesonic vacua of the theory
The space of mesonic vacua of the Klebanov-Witten theory is the most convincing way to see that it is the theory dual to a stack of D3-branes on the conifold.

One can expand the matter kinetic term as

$$
\begin{align}
&\int d^4 x d^4\theta \operatorname{Tr} \left[A_i^\dagger e^{V_1}A_i e^{-V_2}+B_i^\dagger e^{V_2}B_i e^{-V_1}\right]\\
&=\int d^4 x d^4\theta \operatorname{Tr}\left[A_i^\dagger V_1 A_i-A_i^\dagger A_i V_2+...\right]\\
&\supset \int d^4x \operatorname{Tr} [D_1 \sum_i (A_i A_i^\dagger-B_i^\dagger B_i)+D_2 \sum_i (B_i^\dagger B_i-A_i^\dagger A_i)+\frac{1}{2g_1^2}\operatorname{Tr} D_1^2+\frac{1}{2g_2^2}\operatorname{Tr} D_2^2],
\end{align}
$$

where $D&#95;1, D&#95;2$ are the auxillary fields in the supervector field, and in the last line $A&#95;i$ represents the lowest component of the chiral superfield (before, it represented the entire component). One can solve for $D&#95;1, D&#95;2$ using the equation of motion, since they have no kinetic term. After substituting in the equation of motion for $D&#95;1,D&#95;2$, one has the terms

$$
\begin{align}
\sum_i \int d^4 x\operatorname{Tr}(A_i^\dagger A_i-B_i^\dagger B_i)^2+\operatorname{Tr}(A_i A_i^\dagger -B_i B_i^\dagger)^2,
\end{align}
$$
 
the minimization of which implies that the vacua of the theory satisfy the equations

$$
\begin{align}
\sum_{i=1}^2 (A_i A_i^\dagger-B_i^\dagger B_i)&=0\\
\sum_{i=1}^2 (B_i B_i^\dagger-A_i^\dagger A_i)&=0,
\end{align}
$$

where now in this equation $A,B$ characterize the expectation values of the respective fields, as is typical.

An additional term one gets from the matter D-term is 

$$
\begin{align}
\int d^4 x \sum_I F_I^\dagger F^I,
\end{align}
$$

where $F^I$ is the auxillary component of the chiral superfield $\Phi^I$.

Similarly, one can analyze the reduction of the F-terms from superspace, where one expands the chiral superfield as

$$
\begin{align}
W(\Phi)&=W(\phi)+\frac{\partial W}{\partial \phi}(\sqrt{2}\theta \psi^I+ \theta^2 F^I)+...
\end{align}
$$

Collecting all the terms involving $F&#95;I$, one has

$$
\begin{align}
\int d^4 x\;F_I^\dagger F_I+F_I \frac{\partial W}{\partial \phi^I}+F_I^\dagger \frac{\partial \overline{W}}{\partial \phi^\dagger_I}.
\end{align}
$$

Solving for the equation of motion of $F$ yields

$$
\begin{align}
\int d^4 x\sum_I \left|\frac{\partial W}{\partial \Phi_I}\right|^2,
\end{align}
$$

such that $\frac{\partial W(\phi)}{\partial \phi}=0$ for the expectation values of the lowest components of the chiral superfield $\phi$.

This implies that

$$
\begin{align}
A_1 B_i A_2&=A_2 B_i A_1\\
B_1 A_i B_2&=B_2A_i B_1,
\end{align}
$$

for $A,B$ representing the expectation values of the lowest components of the chiral superfields $A,B$.

In fact, such relations hold for the full chiral superfield up to a $\mathbb{D}$-exact (or $\bar{Q}$-exact on the lowest component) term. Consider a variation of the chiral field $\delta \Phi$, the variation of the action is

$$
\begin{align}
\delta S &=\int d^4 x d^4\theta\; \frac{\delta K}{\delta \Phi_I} \delta \Phi^I+\int d^4 x  d^2\theta\;\frac{\delta W}{\delta \Phi_I}\delta \Phi^I+c.c.\\
&=\int d^2\theta\left[ -\frac{1}{4} \overline{\mathbb{D}}^2 \frac{\delta K}{\delta \Phi_I}+\frac{\delta W}{\delta \Phi_I}\right]\delta \Phi^I\\
\implies \frac{\delta W}{\delta \Phi}&=\frac{1}{4}\overline{\mathbb{D}}^2\frac{\delta K}{\delta \Phi_I}.
\end{align}
$$

Given the form of the relations on the vacua, one can choose gauge transformations to simultaneously diagonalize $A,B$: $A=gA^{diag}\tilde{g}^\dagger,B=\tilde{g} B^{diag}g^\dagger$.

The argument for this is actually slightly involved, as far as I'm aware. But a partial argument is that take the eigenvector of $A&#95;i B&#95;j v=z&#95;{ij}v$. Due to the F-term equations, one has $\det Z=0$, implying that $z&#95;{ij}=a&#95;ib&#95;j$ (this is generally true of rank $1$ matrices). It takes some further work to show that these are in fact eigenvalues of a simultaneous diagonalization of $A,B$. But nonetheless given the conditions on the matrices this is just a linear algebra statement, made slightly subtle by the fact that $A,B$ are maps between two different vector spaces.

Presuming such a diagonalization, the D-term relation becomes

$$
\begin{align}
|A_1^{(a)}|^2+|A_2^{(a)}|^2-|B_1^{(a)}|^2-|B_2^{(a)}|^2&=0,
\end{align}
$$

for each eigenvalue $(a)$, subject to the residual gauge redundancy

$$
\begin{align}
(A_i^{(a)},B_i^{(a)})\sim(e^{i\alpha_a}A_i^{(a)},e^{-i\alpha_a}B_i^{(a)}),~~\sum_{a=1}^N \alpha_a=0
\end{align}
$$

as well as a permutation of the eigenvalues of the matrices. The overall redundancy $(A&#95;i^{(a)},B&#95;i^{(a)})\sim(e^{i\alpha}A&#95;i^{(a)},e^{-i\alpha}B&#95;i^{(a)})$ is identified with the Baryon symmetry.

Defining $W&#95;{ij}=A&#95;i^{(a)} B&#95;j^{(a)}$, the equations become $\det W=0$, as well as $&#124;A&#95;1^{(a)}&#124;^2+&#124;A&#95;2^{(a)}&#124;^2=&#124;B&#95;1^{(a)}&#124;^2+&#124;B&#95;2^{(a)}&#124;^2=\rho^2$. Comparing the sum of the squares of entries of this $W$ to the one for the conifold, one identifies $r\propto \rho^{4/3}$, since $\operatorname{Tr} W W^\dagger=\rho^4$. So this is the set of coordinates on the conifold, at a fixed radius.

Therefore, the vacua of the mesonic branch parameterize the conifold! That is, the vacua moduli space is $\mathcal{C}^N/S&#95;N$, where $\mathcal{C}$ is the conifold. This has the interpretation of moving indistinguishable $D3$ branes away from the tip of the conifold. This gives the most compelling evidence that the ambient space where these D3-branes are placed is indeed the conifold.

The isometries of $T^{1,1}$ also become completely manifest in this coordinate system of the conifold. Consider $T^{1,1}$ at fixed radius, emebedded inside the conifold. The Kahler potential on the conifold is $(\operatorname{Tr} W W^\dagger)^{2/3}$. The isometries of $T^{1,1}$ will be the isometries of the conifold that preserve radius. It is obvious then that under $SU(2)&#95;A\times SU(2)&#95;B$, the Kahler potential and consequently the metric is preserved. Additionally, the $U(1)&#95;R$ symmetry is clear as well. Finally, it is clear why $U(1)&#95;B$ is not an isometry of the $T^{1,1}$. In the parameterization of $z&#95;{ij}=A&#95;i B&#95;j$, the $U(1)&#95;B$ symmetry is simply a redundancy in the parameterization of the coordinates of the conifold, which explains why it is not present as an isometry.

From this perspective, we can also see why there can be no adjoint matter fields. Such fields would correspond to an extra degree of freedom in the moduli space: for one D-brane, we would have the conifold times $\mathbb{C}$.

Finally, we can try to understand the limit of what happens when we take all the D3-branes off the conifold singularity, but still coincident. For simplicity, choose $\langle A&#95;1\rangle=\langle B&#95;1\rangle=\rho 1&#95;N$, with other components set to zero. This corresponds to, on the conifold, having the branes at a nonzero $z&#95;{11}$, but all other $z&#95;i$ are zero. 

The unbroken gauge group is the diagonal subgroup $SU(N)&#95;{diag}$. Under the usual Higgs mechanism, one can determine the goldstone bosons that become part of the massive gauge fields by looking at the combinations of fields that transform along the broken gauge direction, i.e. $\delta \phi=i\epsilon&#95;a T^a\langle \phi\rangle$, with $T^a$ the broken generator in question (In this case, a gauge transformation of the form $g=e^{i\epsilon},\tilde{g}=e^{-i\epsilon}$, with $\epsilon=\alpha&#95;a T^a$).

In this case, the combination of $A,B$ that is shifted by the broken gauge direction is the traceless part of $A&#95;1-A&#95;1^\dagger -B&#95;1+B&#95;1^\dagger$, so this becomes the goldstone boson that becomes part of the massive vector boson. Consider the fluctuations of $A&#95;1=\rho+C+H,B&#95;1=\rho+C-H$.  The imaginary part of $H$ is the goldstone boson, so let's inspect the real part of $H$.

Recall that we found the D-term to contain terms of the form

$$
\begin{align}
\operatorname{Tr}(A_i^\dagger A_i-B_i^\dagger B_i)^2
\end{align}
$$

Expanding out to quadratic order in the fluctuations, we find a mass term for the real part of $H$ (i.e. $H+H^\dagger$). That is to say, the traceless part of $A&#95;1+A&#95;1^\dagger-B&#95;1-B&#95;1^\dagger$ acquires a mass term. The remaining massless fields are $C$, as well as $A&#95;2,B&#95;2$.

If we expand the superpotential $\epsilon^{ik}\epsilon^{jl}\operatorname{Tr} A&#95;i B&#95;j A&#95;k B&#95;l$, in terms of fluctuations around $A&#95;1=B&#95;1=\rho 1&#95;N+C$, and expanding in first order of $C$ only, we get the effective superpotential, up to a normalization convention which I have not checked, 

$$
\begin{align}
W&=2\lambda \rho\operatorname{Tr}([C,A_2]B_2)\\
&=2\lambda \rho \epsilon^{IJK}\operatorname{Tr} (\Phi_I[\Phi_J,\Phi_K]),
\end{align}
$$

where the last line is just a suggestive renaming of variables. From the perspective of our UV theory, this is a relevant term, so will drive us to a new fixed point, and while the other terms in the expansion of this superpotential are marginal from the UV perspective, we suppose they become irrelevant in the IR. One can again post-verify this: if we assume that the IR description is $\mathcal{N}=4$ SYM, then the further terms, which will be quartic in the superfields, will become irrelevant in the $\mathcal{N}=4$ SYM, while the leading term becomes marginal (since the lowest component of $\Phi$ has scaling dimension 1).

At low enough energies, one can integrate out the effects of the massive degrees of freedom associated with the massive gauge boson. If we suppose that the full superpotential supports the symmetries of $W$, then we can see that there is an $SU(3)$ enhanced flavor symmetry between $\Phi&#95;I,\Phi&#95;J,\Phi&#95;K$.

This is starting to look a lot like $\mathcal{N}=4$ SYM. In particular, we also have an additional $SU(3)$ symmetry rotating $\Phi&#95;{I,J,K}$, so the full flavor symmetries visible are $U(1)&#95;R\times SU(3)$. It turns out the full $SU(4)$ R-symmetry is not manifest from the action of $\mathcal{N}=4$ SYM in $\mathcal{N}=1$ notation, as it mixes chiral and vector multiplets. Therefore, it seems quite promising that this theory does indeed flow to the $\mathcal{N}=4$ SYM, where at the fixed point $W$ turns into a marginal interaction. 

If one writes $\mathcal{N}=4$ SUSY in $\mathcal{N}=1$ superspace, one does have the manifest $SU(3)\times U(1)$ symmetry that we have written, as well as the precise superpotential term we derived:

$$
\begin{align}
S_{\mathcal{N}=4}&=\int d^4 x\bigg\{\frac{1}{4\pi}\operatorname{Im}\; \left[\tau \int d^2\theta\; \operatorname{Tr} (W^\alpha W_\alpha)\right]+\sum_{I=1}^3\int d^4 \theta \Phi_I^\dagger e^{V}\Phi_I e^{-V}\\
&+\int d^2\theta\; g_{YM}\epsilon^{IJK}\operatorname{Tr} (\Phi_I[\Phi_J,\Phi_K])+c.c.\bigg\},
\end{align}
$$

for which there is only an $SU(3)\times U(1)$ symmetry manifest at the level of the action.

Perhaps the most convincing evidence that a stack of D3-branes away from the conifold becomes $\mathcal{N}=4$ SYM is from the gravity side. Away from the singularity at a point $p$ there exist local Riemann normal coordinates such that 

$$
\begin{align}
ds^2&=\delta_{mn}dy^m dy^n +\mathcal{O}\left(\frac{y^2}{L^2_{\text{curvature}}}\right),
\end{align}
$$

where $L&#95;{\text{curvature}}$ parameterizes the curvature length-scale at the point $p$. Near the stack of D-branes, for distances $y\ll L&#95;{\text{curvature}}$, the transverse solution of the black 3-brane takes the form

$$
\begin{align}
ds^2=H^{-1/2}dx^2+H^{1/2}(dr^2+r^2 d\Omega_{5}^2),
\end{align}
$$

and the standard near-horizon limit argument will give $\mathcal{N}=4$ SYM. This reveals the essential nature of Calabi-Yau singularities in obtaining different dual gauge theories. 

## Basic description of states

### Mesons
One can in general write two important classes of gauge invariant states: mesons and baryons. For the purposes of these notes, we will primarily concerned with finding $\bar{Q}$-cohomology representatives of chiral primaries.

 Mesons can be written as operators of the form

$$
\begin{align}
\mathcal{O}_{i_1...i_k,j_1...j_k}&=\operatorname{Tr} (A_{i_1}B_{j_1}...A_{i_k}B_{j_k})
\end{align}
$$

We can decompose such operators into representations of "spin" under the $SU(2)\times SU(2)$ flavor symmetries. Using Clebsch-Gordon analysis, one determines that the totally symmetrized product of $A,B$, i.e. 

$$
\begin{align}
\mathcal{O}_{(i_1...i_k)(j_1...j_k)}&=\operatorname{Tr} (A_{(i_1}B_{(j_1}...A_{i_k)}B_{j_k)}),
\end{align}
$$

transforms in the $\frac{k}{2}\otimes \frac{k}{2}$-spin representation of $SU(2)\times SU(2)$. Other representations will involve various antisymmetrization of pairs of indices. By the arguments pertaining to the F-terms holding up to Q-exact relations, an antisymmetrization of $A,B$ is equivalent to a $\bar{Q}$-exact term. 

In terms of the chiral superfields, replace each antisymmetric combination of $A,B$, $A&#95;{i&#95;1}B&#95;j A&#95;{i&#95;2}-A&#95;{i&#95;2}B&#95;j A&#95;{i&#95;1}$, with the $\overline{\mathbb{D}}^2\frac{\delta K}{\delta \Phi&#95;I}$ term that holds at the level of the equation of motion. Then, because the rest of the components of the operator are chiral fields, the entire operator becomes a total superspace derivative, whose lowest component is $\bar{Q}$-exact.

BPS single trace meson operators function in much the same way as BPS single trace operators of the $\mathcal{N}=4$ theory, with the dual states in the supergravity regime being KK modes of $T^{1,1}$.

### Baryons

A large class of baryon operators can be written as

$$
\begin{align}
\mathfrak{D}_{i_1...i_N}&=\frac{1}{N!}\epsilon^{a_1...a_N}\epsilon_{b_1...b_N}(A_{i_1})_{a_1}^{b_1}...(A_{i_N})_{a_N}^{b_N}\\
\tilde{\mathfrak{D}}_{j_1...j_N}&=\frac{1}{N!}\epsilon^{a_1...a_N}\epsilon_{b_1...b_N}(B_{j_1})_{a_1}^{b_1}...(B_{j_N})_{a_N}^{b_N}
\end{align}
$$

(one rescales the $U(1)&#95;B$ charge such that these operators have $+1,-1$ charge under the $U(1)&#95;B$, respectively). These operators can be viewed as written in superspace notation, such that they are all chiral superfields. 

The R-charge of the Baryon operator is $\frac{N}{2}$ and their scaling dimension is therefore $\Delta=\frac{3}{4}N$ (note that the Baryon operators are exactly symmetric in the flavor indices and therefore one doesn't need to discuss being chiral primaries up to $\bar{Q}$-exact components).

### Non-chiral operators
There are of course non-chiral states, such as an analog to the Konishi operator, given by (in the notation of the lowest components of the bosonic field),

$$
\begin{align}
\mathcal{K}&=\operatorname{Tr}(A_i^\dagger A_i+B_j^\dagger B_j),
\end{align}
$$

or equivalently in superspace notation,

$$
\begin{align}
\mathcal{K}&=\operatorname{Tr}(A_i^\dagger e^{V_1}A_ie^{-V_2}+B_j^\dagger  e^{V_2}B_je^{-V_1})
\end{align}
$$

Such a state is unprotected, and its scaling dimension at the fixed point cannot be determined. Their exact dimensions are not protected and are unknown as far as I'm aware.

## Matching the spectrum of the axio-dilaton
As done in the string notes for the axio-dilaton in the case of $\mathcal{N}=4$ SYM, we can do for the axio-dilaton of the string theory on $AdS&#95;5\times T^{1,1}$, matching the spectrum on both sides. The match will be between single trace operators and $KK$ modes coming from the isometries of $T^{1,1}$.

The axio-dilaton is certainly the simplest operator to match, as just like in the $AdS&#95;5\times S^5$ case, its linearized fluctuations do not mix with those of other fields. Therefore, we can just analyze the harmonics on $T^{1,1}$ to obtain the mass of the field in the regime where the supergravity approximation holds.

Unlike in the $S^5$ case, not all angular harmonics will correspond to chiral/BPS fields. Consider the harmonic of the form $Y&#95;{j,l,r}$, where $j,l$ are the $SU(2)$ quantum numbers of the two $SU(2)$ symmetries, and $r$ is the $U(1)&#95;R$ charge.

With the interpretation that $A&#95;i B&#95;j=z&#95;{ij}$ parameterize the conifold at fixed radius, chiral fields will correspond to angular harmonics $Y&#95;{j,l,r}$ that come from holomorphic functions on the conifold, restricted to a given radius. The F-term relation, discussed previously to hold up to $Q$-exact terms, holds exactly on the conifold due to the condition that $\det z=0$. Consequently, the degree $k$ holomorphic polynomials on the conifold transform as the $\frac{k}{2},\frac{k}{2}$ spin representation.

Chiral primaries correspond to the angular harmonics with quantum numbers $(\frac{k}{2},\frac{k}{2},k)$, so the task becomes finding the mass of such fluctuations.

Recall the form of the metric given in equation $\eqref{eq:cosetMetric}$. From this metric, can easily decompose the components of this Laplacian into the eigenvalues of the $SU(2)\times SU(2)\times U(1)$ symmetries, viewed as the generators $T&#95;i$ dual to the one-forms $e&#95;i$ in the metric. One has

$$
\begin{align}
(T_1^2+T_2^2)Y=(j(j+1)-\frac{r^2}{4})Y,
\end{align}
$$

since the $U(1)&#95;R$ charge is generated by $t&#95;3+\hat{t}&#95;3$, which we define to take eigenvalues $r$. and in the quotient one must have $t&#95;3-\hat{t}&#95;3=0$. Then, one has $T&#95;{3}Y=i\frac{r}{2}Y$, in the normalization conventions of the metric we wrote down. Therefore, the $e^5$ part contributes 

$$
\begin{align}
T_5^2 Y&=-\frac{r^2}{4},
\end{align}
$$

with the normalization of the $e^5$ as is present in the metric, which is slightly non-standard due to the fact that $\psi$ has period $4\pi$, meaning the basic quantization of $r$-charge with respect to $e^5$ is in half-units (under this normalization, the R-charge of $z&#95;{ij}$ is 1).  Consequently, the overall Laplacian takes the form

$$
\begin{align}
\frac{6}{R^2}\left(j(j+1)+\ell(\ell+1)-\frac{r^2}{8}\right)
\end{align}
$$

Plugging in $\frac{k}{2},\frac{k}{2},k$, the mass of the fluctuations of the axio-dilaton in $AdS&#95;5$, $\delta \tau=\sum&#95;I \tau&#95;I(x) Y&#95;I(y)$, becomes $\frac{1}{R^2}\frac{3k}{2}\left(\frac{3k}{2}+4\right)$. One has the relation between scaling dimension and mass as $\Delta(\Delta-4)=m^2R^2$, from which we can determine that the scaling dimension is

$$
\begin{align}
4+\frac{3k}{2}
\end{align}
$$

Now, we don't know what $\tau&#95;{IIB}$ corresponds to in the gauge theory side, due to the strong coupling nature of the theory and the fact that $\tau&#95;{YM},\lambda$ are not exactly marginal deformations. But we might imagine that one operator that contributes to it is the marginal superpotential term $\lambda\epsilon^{ik}\epsilon^{jl}\operatorname{Tr} A&#95;i B&#95;j A&#95;k B&#95;l$. Then, the polynomials in $z&#95;{i&#95;kj&#95;k}$, or equivalently the spherical harmonics with $(\frac{k}{2},\frac{k}{2},k)$ quantum numbers, will correspond in partto dual operators of the form

$$
\begin{align}
\lambda\epsilon^{ik}\epsilon^{jl}\operatorname{Tr} A_i B_j A_k B_l (A_{(m_1}B_{(n_1}...A_{m_k)}A_{n_k)}),
\end{align}
$$

with additional mixing from gauge kinetic terms $\operatorname{Tr} W^2 (A&#95;{(m&#95;1}B&#95;{(n&#95;1}...A&#95;{m&#95;k)}A&#95;{n&#95;k)})$ as well.

Now, because this is an F-term, $\lambda$ will actually couple in the action to a term of weight 4 (which makes sense, as marginal interactions in non-superspace need weight 4). The additional contribution of $(A&#95;mB&#95;n)^k$ will exactly add $\frac{3k}{2}$ to the scaling dimension, as required.

## The baryon symmetry and the dual string states to baryon operators
The global baryon $U(1)&#95;B$ does not come from an isometry. But under the general AdS/CFT dictionary, it must correspond to some gauge field in the bulk.

The precise correspondence is really between symmetries on the boundary and gauge fields whose values do not vanish at infinity in the bulk, in the sense that if one considers the term

$$
\begin{align}
\label{eq:deformation}
\Delta S&=\int d^4 x A_\mu^{(0)}J^\mu(x),
\end{align}
$$

to the CFT action, with $A&#95;\mu^{(0)}$ some background field, $A&#95;\mu(z)$ extends to a bulk gauge field, such that 

$$
\begin{align}
Z_{CFT}[A_\mu^{(0)}]&=Z_{bulk}[\lim_{z\to \text{boundary}}A_\mu(z)=A_\mu^{(0)}].
\end{align}
$$

The gauge field invariance, for example $A&#95;\mu \to A&#95;\mu+\partial&#95;\mu \lambda$, under gauge field transformations that do not vanish at the boundary, becomes the conservation of the current on the boundary. Deform the action by equation $\eqref{eq:deformation}$ for background field $A$ and consider the $W=\log Z$. One has

$$
\begin{align}
\frac{\delta W}{\delta A_\mu^{(0)}}&=\langle J^\mu\rangle_{A^{(0)}}.
\end{align}
$$

Now performing an infinitesimal gauge transformation, one has

$$
\begin{align}
\frac{d}{d\epsilon}W[A+\epsilon \partial \lambda]\bigg|_{\epsilon=0}&=0\\
&=\int d^4 x\langle J^\mu(x)\rangle_{A^{(0)}}\partial_\mu \lambda(x)\\
&=-\int d^4 x \lambda(x) \partial_\mu \langle J^\mu(x)\rangle_{A^{(0)}},
\end{align}
$$

implying the conservation of $J$.

We should look for a gauge field that doesn't come from KK reduction of the isometries of $T^{1,1}$ that corresponds to $U(1)&#95;B$. The basic idea is that instead of looking at the KK reduction of the metric on $T^{1,1}$, one should look for KK reduction of the RR fields along the non-trivial homology cycles of $T^{1,1}$. One can expand the $C&#95;4$ field as $A&#95;B\wedge \omega&#95;3$, for the non-trivial $\omega&#95;3$ dual to the non-trivial homology cycle. For the identification of $A&#95;B$ to $U(1)&#95;B$ to be plausible, one needs a correspondence between the Baryon operator and something charged under $A&#95;B$ in the bulk.

Observe that there is a non-contractible $S^3$ of $T^{1,1}$. One parameterization of $S^3$ is

$$
\begin{align}
ds_3^2&=R^2\left[\frac{1}{9}(d\psi+\cos\theta_1d\phi_1)^2+\frac{1}{6}(d\theta_1^2+\sin^2\theta_1d\phi_1^2)\right],
\end{align}
$$

where the complex coordinates in the definition of this $S^3$ can be defined as

$$
\begin{align}
z_1&=e^{\frac{i}{2}(\psi+\phi)}\cos\frac{\theta}{2},\; z_2=e^{\frac{i}{2}(\psi-\phi)}\sin\frac{\theta}{2},\\
|z_1|^2+|z_2|^2&=1
\end{align}
$$

We can wrap D3-branes along this non-contractible cycle, winding it once. In the standard SUGRA regime, where $N\gg 1,gsN\gg 1,g&#95;s\ll 1$, the wrapped D3-brane can be treated semiclassically, with its mass given by $T&#95;3 \text{vol} (\Sigma&#95;3)$. Evaluating the volume and tension of the D3-brane and presuming it sits in its ground state configuration of sitting along $\rho=0$ in global $AdS&#95;5$, the mass of the D3-brane is

$$
\begin{align}
\frac{1}{g_B(2\pi)^3(\alpha')^2}\frac{8\pi^2}{9}R^3&=\frac{3N}{4R}
\end{align}
$$

Parameterize the worldvolume of the D-brane as $\gamma\times \Sigma&#95;3$, with parameterization $X^m(\lambda,\sigma)=(x^\mu(\lambda),y^m(\sigma))$ and choose static gauge such that $y^m(\sigma)=y^m$, the coordinates along the wrapped cycle, and $x^\mu(\gamma)$ a worldline in $AdS&#95;5$. The Wess-Zumino term (which is originally $\int&#95;{\mathcal{W}&#95;4}P[C&#95;4]$) for the D-brane reduces to

$$
\begin{align}
S_{WZ}&=\mu_3\left(\int_{\Sigma_3}\omega_3\right)\int_{\mathbb{R}_t} d\lambda A_\mu^B(x(\lambda))\dot{x}^\mu,
\end{align}
$$

so there is a natural massless gauge field associated with the baryon symmetry, with the baryon operators naturally charged under this symmetry. We can also see that the wound D3-branes on the two $S^3$ cycles are oppositely charged under this symmetry. Defining

$$
\begin{align}
\eta&\equiv d\psi+\cos\theta_1d\phi_1+\cos\theta_2d\phi_2\\
\omega_i&=\sin\theta_i d\theta_i \wedge d\phi_i,
\end{align}
$$

the harmonic 3-form globally on $T^{1,1}$ is

$$
\begin{align}
\Omega_3&=\eta\wedge(\omega_1-\omega_2),
\Omega_3\bigg|_{\Sigma_1}&=\eta\wedge \omega_1\\
\Omega_3\bigg|_{\Sigma_2}&=-\eta\wedge \omega_2,
\end{align}
$$

where $\Sigma&#95;1,\Sigma&#95;2$ are the two $S^3$'s obtained by fixing $(\theta&#95;2,\phi&#95;2),(\theta&#95;1,\phi&#95;1),$ respectively. Meanwhile, with a consistent choice of orientation, the volume forms on the two $S^3$'s being given by $\eta\wedge \omega&#95;1,\eta\wedge\omega&#95;2$. With a consistent choice of orientation on the two $S^3$ cycles, D3-branes wrapping either of the two $S^3$'s will have opposite charge of one another, which is the same as the baryons under the $U(1)&#95;B$, which have opposite charge under the $U(1)&#95;B$.

Of course, it is not guaranteed that the wrapped D3-brane will wind around $\omega&#95;3$ once. Instead, it could wind $k$ times, leading to integer multiples of the fundamental charge. This would just be dual to the product state $(\epsilon \epsilon A^N)^k$ with Baryon number $k$. Therefore, Baryon number is dual to winding number.

Now one can compute the action for this massive particle at rest at the center of global $AdS&#95;5$:

$$
\begin{align}
ds^2&=R^2(d\rho^2-\cosh^2 \rho d\tau^2+\sinh^2\rho d\Omega_3^2),
\end{align}
$$

with energy measured with respect to global AdS time $\tau$ (equivalently, its Killing vector -- this is the quantity that matches up with scaling dimension on the boundary). The action, which is

$$
\begin{align}
-m\int ds&=-mR\int d\tau,
\end{align}
$$

gives the Lagrangian with respect to AdS time $\tau$ as $-mR$. Therefore, the conjugate Hamiltonian is $mR$, which gives the energy of the particle as $mR$, with respect to the Hamiltonian that is matched on the boundary. Therefore, the scaling dimension of the dual operator is $\Delta=mR=\frac{3N}{4}$. In fact, this is precisely the scaling dimension of the Baryon operator we found!

The final thing one can say is about the moduli space of the baryons, which comes from the D3-brane degrees of freedom along the $S^2$. The ground state energy comes from constraining the baryon to lie at the center of $AdS&#95;5$, but there is no such constraint on the $S^2$ factor.

From the point of view of the D-brane, it can move as a charged particle under the magnetic flux induced by the constant component $F&#95;5$. Specifically, consider the worldvolume coordinates in static gauge as $\zeta^a=(\lambda,\sigma^1,\sigma^2,\sigma^3)=(\lambda,\psi,\theta&#95;1,\phi&#95;1)$. Then take the embedding into $T^{1,1}$ as $(\psi=\sigma^1,\theta&#95;1=\sigma^2,\phi&#95;1=\sigma^3,\theta&#95;2=q^1(\lambda),\phi&#95;2=q^2(\lambda))$, with $\vec{q}$ parameterizing a path in the $S^2$ space.

This produces a coupling of the form

$$
\begin{align}
\int d\lambda \mathcal{A}_a(q) \dot{q}^a,
\end{align}
$$

(Note: the $F$ only has support along either $AdS&#95;5$ or $T^{1,1}$, not both),
where explicitly,

$$
\begin{align}
\mathcal{A}_a&=\mu_3\int d\psi d\theta_1 d\phi_1 C^{(0)}_{a\psi\theta_1\phi_1}\\
\mathcal{F}_{\theta_2\phi_2}&=\mu_3\int d\psi d\theta_1 d\phi_1 F_{\theta_2 \phi_2 \psi \theta_1 \phi_1}.
\end{align}
$$

This produces an effective description of the  D3-brane in the presence of a $N$ units of constant magnetic flux $F=d\mathcal{A}$.

This is just a quantum mechanics problem: a particle on a sphere in the presence of $N$ units of magnetic flux. The lowest Landau level, equivalently the lowest energy state, of a particle on the sphere $S^2$ in the presence of a magnetic field with $N$ units of magnetic flux has degeneracy $N+1$, with the particles transforming in the $\frac{N}{2}$ representation of the $SU(2)$ factor corresponding to the $S^2$ parameterizing the D3-brane moduli space.

This is precisely the degeneracy of the baryon states we wrote down (because the symmetrization of the flavor indices is automatic from the $\epsilon$-tenors, the degeneracy of states just comes from the $N+1$ possible number of $A&#95;1$ factors, for example), as well as the spin of the baryons under either of the flavor $SU(2)$ symmetries. This gives strong evidence that wrapped D3-branes really are dual to baryons.
